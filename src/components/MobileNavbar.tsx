'use client';

import { useEffect } from 'react';

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavbar({ isOpen, onClose }: MobileNavbarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xl">
      <div className="flex flex-col h-full">
        {/* Header with A1 logo, Echos App, and close button */}
        <div className="flex items-center justify-between p-6 pt-8">
          <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.1379 6.10501e-07C13.182 1.9378e-05 14.1155 0.65071 14.4771 1.63028L22.7328 24H17.5474L11.8095 8.07802C11.7114 7.80596 11.328 7.80258 11.225 8.07285L5.1602 24H0.174408L8.52912 1.62145C8.89311 0.646461 9.82424 2.4241e-05 10.865 6.10501e-07H12.1379ZM11.8664 7.66528C11.8792 7.67389 11.8918 7.683 11.9041 7.69268C11.8796 7.67334 11.8539 7.65603 11.8271 7.64093L11.8664 7.66528Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M33.8182 6.10501e-07C34.6355 6.10501e-07 35.2981 0.66258 35.2981 1.47991V24H30.2934V5.61039H25.2467V2.91964L30.9037 0.240159C31.2374 0.0821151 31.602 4.54225e-06 31.9712 6.10501e-07C32.3061 -2.95651e-06 32.8698 1.07102e-05 33.8182 6.10501e-07Z" fill="white"/>
          </svg>
          
          <div className="flex items-center space-x-4">
            <span className="hidden sm:block text-gray-400 text-sm font-medium">Echos App</span>
            <button 
              onClick={onClose}
              className="text-white text-2xl font-light hover:opacity-70 transition-opacity"
            >
              ×
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-6 pt-12">
          {/* Company Section */}
          <div className="mb-12">
            <h3 className="text-gray-400 text-sm font-medium mb-6">Company</h3>
            <ul className="space-y-6">
              <li>
                <a href="#" className="text-white text-xl font-light hover:opacity-70 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-xl font-light hover:opacity-70 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-xl font-light hover:opacity-70 transition-opacity">
                  Echos App
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-xl font-light hover:opacity-70 transition-opacity">
                  Technology
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="mb-12">
            <h3 className="text-gray-400 text-sm font-medium mb-6">Connect</h3>
            <ul className="space-y-6">
              <li>
                <a href="#" className="text-white text-xl font-light hover:opacity-70 transition-opacity">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-xl font-light hover:opacity-70 transition-opacity">
                  X
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-xl font-light hover:opacity-70 transition-opacity">
                  Github
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-xl font-light hover:opacity-70 transition-opacity">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}