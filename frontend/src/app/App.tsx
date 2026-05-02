import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';
import { ChatAssistant } from './components/ChatAssistant';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useTheme } from '../hooks/useTheme';
import { Scene3D } from './components/3d/Scene3D';
import { api } from '../services/api';

export default function App() {
  const { currentSection } = useScrollProgress();
  const { theme, toggleTheme } = useTheme();
  const [profileData, setProfileData] = useState<any>(null);
  const [projectsData, setProjectsData] = useState<any[]>([]);
  const [showIntro, setShowIntro] = useState(true);
  const [isExploding, setIsExploding] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const [profile, projects] = await Promise.all([
        api.getProfile(),
        api.getProjects()
      ]);
      setProfileData(profile);
      setProjectsData(projects);
    };

    loadData();
  }, []);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleGetStarted = () => {
    setIsExploding(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 800);
  };

  if (!profileData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-background text-foreground min-h-screen">
      <Navigation 
        currentSection={currentSection} 
        profileImage={profileData.profileImage}
        onChatOpen={() => setIsChatOpen(true)}
        theme={theme}
        onThemeToggle={toggleTheme}
      />

      {showIntro && (
        <section className={`fixed inset-0 z-50 flex items-center justify-center bg-background/95 px-6 py-12 backdrop-blur-xl transition-all duration-700 ${isExploding ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
          <div className="absolute inset-0 opacity-40">
            <Scene3D
              shapes={[
                { type: 'sphere', position: [0, 0, -3], speed: 0.6, color: theme === 'dark' ? '#C4A57B' : '#A67C52' },
                { type: 'box', position: [-2, 1.5, -2], speed: 0.8, color: theme === 'dark' ? '#D4B896' : '#C4A57B' },
                { type: 'torus', position: [2.5, -1.5, -2], speed: 0.7, color: theme === 'dark' ? '#A67C52' : '#8B6F47' }
              ]}
              explode={isExploding}
            />
          </div>
          <div className="relative z-10 max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/80 mb-4">{profileData.title}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">{profileData.name}</h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground mb-10">
              {profileData.bio || "Start with an optimized entry animation, then explore the portfolio with lightweight 3D visuals and fast rendering."}
            </p>
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Get Started
            </button>
          </div>
        </section>
      )}

      <main className={`${showIntro ? 'pointer-events-none opacity-0' : 'opacity-100'} transition-all duration-700`}>
        <section id="home">
          <HeroSection
            name={profileData.name}
            title={profileData.title}
            profileImage={profileData.profileImage}
          />
        </section>

        <section id="about">
          <AboutSection
            bio={profileData.bio}
            location={profileData.location}
            email={profileData.email}
            phone={profileData.phone}
            social={profileData.social}
          />
        </section>

        <section id="skills">
          <SkillsSection skills={profileData.skills} />
        </section>

        <section id="projects">
          <ProjectsSection projects={projectsData} />
        </section>

        <section id="experience">
          <ExperienceSection
            experience={profileData.experience}
            education={profileData.education}
          />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border text-foreground py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} {profileData.name}
          </p>
        </div>
      </footer>

      {/* Chat Assistant */}
      <ChatAssistant isOpen={isChatOpen} onToggle={setIsChatOpen} />
    </div>
  );
}