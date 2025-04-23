
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from '@/components/ThemeProvider';

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Header = ({ language, setLanguage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'gr' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-brand-dark shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-2xl md:text-3xl font-bold text-brand-dark dark:text-brand-light">
            CORFU<span className="text-brand-yellow">CAR</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mr-2" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <button
            onClick={toggleMenu}
            className="text-brand-dark dark:text-brand-light focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium text-brand-dark dark:text-brand-light hover:text-brand-yellow transition-colors">
            {language === 'en' ? 'Home' : 'Αρχική'}
          </a>
          <a href="#fleet" className="font-medium text-brand-dark dark:text-brand-light hover:text-brand-yellow transition-colors">
            {language === 'en' ? 'Fleet' : 'Στόλος'}
          </a>
          <a href="#pre-owned" className="font-medium text-brand-dark dark:text-brand-light hover:text-brand-yellow transition-colors">
            {language === 'en' ? 'Pre-Owned' : 'Μεταχειρισμένα'}
          </a>
          <a href="#financing" className="font-medium text-brand-dark dark:text-brand-light hover:text-brand-yellow transition-colors">
            {language === 'en' ? 'Financing' : 'Χρηματοδότηση'}
          </a>
          <a href="#contact" className="font-medium text-brand-dark dark:text-brand-light hover:text-brand-yellow transition-colors">
            {language === 'en' ? 'Contact' : 'Επικοινωνία'}
          </a>
          <Button 
            onClick={toggleLanguage} 
            variant="outline" 
            className="px-3 font-semibold text-sm"
          >
            {language === 'en' ? 'EN | GR' : 'GR | EN'}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-brand-dark shadow-lg md:hidden z-50">
            <div className="flex flex-col p-4">
              <a href="#home" className="py-2 font-medium text-brand-dark dark:text-brand-light hover:text-brand-yellow">
                {language === 'en' ? 'Home' : 'Αρχική'}
              </a>
              <a href="#fleet" className="py-2 font-medium text-brand-dark dark:text-brand-light hover:text-brand-yellow">
                {language === 'en' ? 'Fleet' : 'Στόλος'}
              </a>
              <a href="#pre-owned" className="py-2 font-medium text-brand-dark dark:text-brand-light hover:text-brand-yellow">
                {language === 'en' ? 'Pre-Owned' : 'Μεταχειρισμένα'}
              </a>
              <a href="#financing" className="py-2 font-medium text-brand-dark dark:text-brand-light hover:text-brand-yellow">
                {language === 'en' ? 'Financing' : 'Χρηματοδότηση'}
              </a>
              <a href="#contact" className="py-2 font-medium text-brand-dark dark:text-brand-light hover:text-brand-yellow">
                {language === 'en' ? 'Contact' : 'Επικοινωνία'}
              </a>
              <Button 
                onClick={toggleLanguage} 
                variant="outline" 
                className="mt-2 font-semibold text-sm"
              >
                {language === 'en' ? 'EN | GR' : 'GR | EN'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
