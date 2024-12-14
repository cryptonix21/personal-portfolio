import { useState, useCallback, memo } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { handleDownload } from './Resume';
import homeIcon from '../assets/home.png';
import skillsIcon from '../assets/skills.png';
import projectsIcon from '../assets/projects.png';
import contactIcon from '../assets/contact.png';
import resumeIcon from '../assets/resume.png';

// Memoized navigation item component
const NavItem = memo(({ to, icon, label, onClick }: { 
  to: string; 
  icon: any; 
  label: string; 
  onClick?: () => void 
}) => (
  <li className="py-2">
    {onClick ? (
      <button 
        onClick={onClick}
        className="text-gray-600 hover:text-uni-pink transition-all duration-300 flex flex-col items-center p-3 rounded-lg hover:bg-cream-100 min-w-[100px]"
      >
        <img 
          src={icon} 
          alt={label} 
          className={`w-12 h-12 mb-1 ${label === 'Resume' ? 'animate-fade-in-delay-2' : ''}`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={48}
          height={48}
        />
        <span className={label === 'Resume' ? 'animate-fade-in-delay-2' : ''}>
          {label}
        </span>
      </button>
    ) : (
      <Link 
        to={to}
        className="text-gray-600 hover:text-uni-pink transition-all duration-300 flex flex-col items-center p-3 rounded-lg hover:bg-cream-100 min-w-[100px]"
      >
        <img 
          src={icon} 
          alt={label} 
          className={`w-12 h-12 mb-1 ${label === 'Resume' ? 'animate-fade-in-delay-2' : ''}`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={48}
          height={48}
        />
        <span className={label === 'Resume' ? 'animate-fade-in-delay-2' : ''}>
          {label}
        </span>
      </Link>
    )}
  </li>
));

NavItem.displayName = 'NavItem';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const navItems = [
    { to: '/', icon: homeIcon, label: 'Home' },
    { to: '/skills', icon: skillsIcon, label: 'Skills' },
    { to: '/projects', icon: projectsIcon, label: 'Projects' },
    { to: '/contact', icon: contactIcon, label: 'Contact' },
    { to: '#', icon: resumeIcon, label: 'Resume', onClick: handleDownload }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-cream-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-center items-center h-24">
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <NavItem 
                  key={item.to} 
                  {...item} 
                />
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-cream-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-t border-cream-200 md:hidden">
              <nav className="container mx-auto px-4 py-4">
                <ul className="flex flex-col items-center space-y-4">
                  {navItems.map((item) => (
                    <NavItem 
                      key={item.to} 
                      {...item}
                    />
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);