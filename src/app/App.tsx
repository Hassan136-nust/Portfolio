import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { api } from '../services/api';

export default function App() {
  const { currentSection } = useScrollProgress();
  const [profileData, setProfileData] = useState<any>(null);
  const [projectsData, setProjectsData] = useState<any[]>([]);

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

  if (!profileData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-neutral-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-neutral-600 dark:text-neutral-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-white dark:bg-neutral-900">
      <Navigation currentSection={currentSection} />

      <main>
        <HeroSection
          name={profileData.name}
          title={profileData.title}
        />

        <AboutSection
          bio={profileData.bio}
          location={profileData.location}
          email={profileData.email}
          phone={profileData.phone}
          social={profileData.social}
        />

        <SkillsSection skills={profileData.skills} />

        <ProjectsSection projects={projectsData} />

        <ExperienceSection
          experience={profileData.experience}
          education={profileData.education}
        />

        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 dark:bg-black text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neutral-400">
            &copy; {new Date().getFullYear()} {profileData.name}. Built with React, Three.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}