import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentSection: number;
  profileImage?: string;
  onChatOpen?: () => void;
}

const sections = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' },
  { name: 'AI Assistant', id: 'chat' }
];

export const Navigation = ({ currentSection, profileImage, onChatOpen }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'chat') {
      onChatOpen?.();
      setIsMenuOpen(false);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-[#F5EFE6]/95 backdrop-blur-xl shadow-lg border-b border-[#D4C4B0]'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-lg text-[#111111] flex items-center">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover object-top border-2 border-[#A67C52] shadow-sm"
                />
              ) : (
                'HJ'
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm transition-colors ${currentSection === sections.indexOf(section)
                      ? 'text-[#A67C52] font-medium'
                      : 'text-[#666666] hover:text-[#111111]'
                    }`}
                >
                  {section.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden md:block text-sm tracking-[0.2em] uppercase text-[#666666]">
                Hassan Jamal
              </span>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-[#E5E5E5] transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-[#111111]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#111111]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#E8DFD0] md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-2xl transition-colors ${currentSection === sections.indexOf(section)
                    ? 'text-[#A67C52] font-medium'
                    : 'text-[#666666]'
                  }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Scroll Progress Indicator */}
      <div className="fixed top-16 left-0 right-0 h-0.5 bg-[#D4C4B0] z-40">
        <div
          className="h-full bg-[#A67C52] transition-all duration-100"
          style={{ width: `${(currentSection / (sections.length - 1)) * 100}%` }}
        />
      </div>
    </>
  );
};
