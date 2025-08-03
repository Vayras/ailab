'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
  onMobileMenuOpen?: () => void;
}

export default function Navbar({ isScrolled, onMobileMenuOpen }: NavbarProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Initialize activeSection based on pathname
    if (pathname === '/echos') {
      setActiveSection('echos-main');
    } else {
      setActiveSection('hero');
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for fixed header

      if (pathname === '/') {
        const sections = ['hero', 'mission-values', 'lets-talk'];
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      } else if (pathname === '/echos') {
        const openSourceSection = document.getElementById('open-source');
        if (openSourceSection && scrollPosition >= openSourceSection.offsetTop - 200) {
          setActiveSection('open-source');
        } else {
          setActiveSection('echos-main');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/echos') {
      return pathname === '/echos' && activeSection === 'echos-main';
    }
    if (path === '/echos#open-source') {
      return pathname === '/echos' && activeSection === 'open-source';
    }
    if (pathname === '/') {
      if (path === '/#hero' || path === '#hero') {
        return activeSection === 'hero';
      }
      if (path === '/#mission-values' || path === '#mission-values') {
        return activeSection === 'mission-values';
      }
    }
    return false;
  };

  const getLinkStyles = (path: string) => {
    const baseStyles = "transition-colors text-lg";
    if (isActive(path)) {
      return `${baseStyles} text-white`;
    }
    return `${baseStyles} text-[#929BA0] hover:text-white`;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/20 backdrop-blur-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link href="/" className="flex items-center space-x-3">
            <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.1379 6.10501e-07C13.182 1.9378e-05 14.1155 0.65071 14.4771 1.63028L22.7328 24H17.5474L11.8095 8.07802C11.7114 7.80596 11.328 7.80258 11.225 8.07285L5.1602 24H0.174408L8.52912 1.62145C8.89311 0.646461 9.82424 2.4241e-05 10.865 6.10501e-07H12.1379ZM11.8664 7.66528C11.8792 7.67389 11.8918 7.683 11.9041 7.69268C11.8796 7.67334 11.8539 7.65603 11.8271 7.64093L11.8664 7.66528Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M33.8182 6.10501e-07C34.6355 6.10501e-07 35.2981 0.66258 35.2981 1.47991V24H30.2934V5.61039H25.2467V2.91964L30.9037 0.240159C31.2374 0.0821151 31.602 4.54225e-06 31.9712 6.10501e-07C32.3061 -2.95651e-06 32.8698 1.07102e-05 33.8182 6.10501e-07Z" fill="white"/>
            </svg>
          </Link>
          <nav className="hidden md:flex space-x-8 items-baseline">
            <Link href="/#hero" className={getLinkStyles('/#hero')}>Home</Link>
            <Link href="/#mission-values" className={getLinkStyles('/#mission-values')}>About</Link>
            <Link href="/echos" className={getLinkStyles('/echos')}>Echos App</Link>
            <Link href="/echos#open-source" className={getLinkStyles('/echos#open-source')}>Technology</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/#lets-talk" className="hidden md:block border border-white/80 text-white px-4 py-1.5 rounded-md hover:bg-white/10 transition-colors font-medium">
            Contact us
          </Link>
          
          {/* Mobile menu button */}
          {onMobileMenuOpen && (
            <button 
              onClick={onMobileMenuOpen}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}