'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // navLinks structure updated with subLinks for Services
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      subLinks: [
        { name: 'IT Solutions', href: '/services/it' },
        { name: 'ERP Solutions', href: '/services/erp' },
        { name: 'Applications Development', href: '/services/apps' },
        { name: 'Web Development', href: '/services/web' },
        { name: 'Testing', href: '/services/testing' },
      ]
    },
    { name: 'Technologies', href: '/technologies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact us', href: '/contact' },
  ];

  // Helper to handle link colors for Desktop vs Mobile
  const getLinkStyle = (path: string, isMobile: boolean) => {
    const isActive = pathname === path;
    if (isMobile) {
      return isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600';
    }
    return isActive ? 'text-blue-400' : 'text-white hover:text-blue-400';
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[999999] bg-[#00000054] backdrop-blur-[10px] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <img src="https://xadelit.com/assets/img/logo.svg" alt="Xadel IT Inc Logo" className="h-8 w-auto invert brightness-0" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group py-2"
              onMouseEnter={() => link.subLinks && setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link 
                href={link.href} 
                className={`${getLinkStyle(link.href, false)} flex items-center gap-1 transition-colors outline-none`}
              >
                {link.name}
                {link.subLinks && (
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                )}
              </Link>

              {/* Desktop Dropdown */}
              {link.subLinks && (
                <div 
                  className={`absolute top-full left-0 w-64 bg-white shadow-2xl rounded-b-md border-t-4 border-blue-600 transition-all duration-300 ${
                    isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
                  }`}
                >
                  <div className="flex flex-col py-2">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden p-2 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Curtain Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-500 ease-in-out overflow-hidden lg:hidden ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <Link 
                href={link.href} 
                className={`${getLinkStyle(link.href, true)} text-lg py-2 flex justify-between items-center`}
                onClick={() => !link.subLinks && setIsOpen(false)}
              >
                {link.name}
              </Link>
              
              {/* Mobile Sublinks (Always visible when menu is open) */}
              {link.subLinks && (
                <div className="flex flex-col ml-4 border-l-2 border-gray-100 pl-4 gap-2 mb-2">
                  {link.subLinks.map((sub) => (
                    <Link 
                      key={sub.name} 
                      href={sub.href} 
                      className="text-gray-500 hover:text-blue-600 text-sm py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}