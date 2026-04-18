import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentSection: number;
}

const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export const Navigation = ({ currentSection }: NavigationProps) => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const scrollToSection = (index: number) => {
    const vh = window.innerHeight;
    window.scrollTo({
      top: vh * index,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-lg text-neutral-900 dark:text-white">
              AJ
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(index)}
                  className={`text-sm transition-colors ${
                    currentSection === index
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
                ) : (
                  <Moon className="w-5 h-5 text-neutral-600" />
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
                ) : (
                  <Menu className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-neutral-900 md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {sections.map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(index)}
                className={`text-2xl transition-colors ${
                  currentSection === index
                    ? 'text-blue-600 dark:text-blue-400 font-medium'
                    : 'text-neutral-600 dark:text-neutral-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Scroll Progress Indicator */}
      <div className="fixed top-16 left-0 right-0 h-0.5 bg-neutral-200 dark:bg-neutral-800 z-40">
        <div
          className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-100"
          style={{ width: `${(currentSection / (sections.length - 1)) * 100}%` }}
        />
      </div>
    </>
  );
};
