// src/components/layout/Navbar.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { FaMoon, FaSun, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import {
  FiDatabase,
  FiLayers,
  FiShoppingCart,
  FiGlobe,
  FiList,
  FiCalendar,
  FiMessageSquare,
  FiMonitor,
  FiInfo,
  FiBriefcase,
  FiMic,
  FiBookOpen,
  FiFileText,
} from 'react-icons/fi';
import LanguageDropdown from '../Language/LanguageDropdown';

// import LanguageDropdown from '../LanguageDropdown';

const menuItems = [
  {
    title: 'Industries',
    links: [
      { label: 'Banking', url: '/industries/banking', icon: <FiDatabase /> },
      { label: 'Platform', url: '/industries/platform', icon: <FiLayers /> },
      { label: 'Retail', url: '#', icon: <FiShoppingCart /> },
      { label: 'Telecom', url: '/telco', icon: <FiGlobe /> },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Spectra', url: '/industries/spectra', icon: <FiList /> },
      { label: 'Health Care', url: '/industries/healthcare', icon: <FiCalendar /> },
      { label: 'Feedback', url: '#', icon: <FiMessageSquare /> },
      { label: 'Digital Signage', url: '#', icon: <FiMonitor /> },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', url: '/about', icon: <FiInfo /> },
      { label: 'Careers', url: '#', icon: <FiBriefcase /> },
      { label: 'Press', url: '#', icon: <FiMic /> },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', url: '/blog', icon: <FiBookOpen /> },
      { label: 'Whitepapers', url: '#', icon: <FiFileText /> },
      { label: 'Events', url: '#', icon: <FiCalendar /> },
    ],
  },
  { title: 'Products', url: '/products' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
  );
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [hoverMenu, setHoverMenu] = useState(null);
  const hoverTimer = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isDark = savedTheme === 'dark';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDark = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const showMenu = (title) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setHoverMenu(title);
  };
  const hideMenu = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setHoverMenu(null), 120);
  };
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header role="banner" className="relative z-50 dark:bg-[#0C0E12]">
      {/* Background Image */}
      {!isSticky && (
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src={
              pathname === '/industries/banking' || pathname === '/telco'
                ? '/assets/bg3.png'
                : '/assets/bg3.png'
            }
            alt="background"
            fill
            className="object-cover dark:mix-blend-color-burn dark:opacity-20"
            priority
          />
        </div>
      )}

      {/* Navbar Content */}
      <div className="relative z-50 mx-auto flex items-center justify-between !py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/logo.png"
            alt="WaveTec Logo"
            width={140}
            height={40}
            className="h-[40px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center space-x-8 xl:flex">
          {menuItems.map((item) =>
            item.url ? (
              <Link
                key={item.title}
                href={item.url}
                className="cursor-pointer py-2 text-[16px] font-semibold text-[#414651] transition hover:text-[#155EEF] dark:text-gray-100"
              >
                {item.title}
              </Link>
            ) : (
              <div
                key={item.title}
                className="group relative"
                onMouseEnter={() => showMenu(item.title)}
                onMouseLeave={hideMenu}
              >
                <button
                  className="flex items-center gap-1 py-2 text-[16px] font-semibold text-[#414651] dark:text-gray-100"
                  aria-haspopup="true"
                  aria-expanded={hoverMenu === item.title}
                  onFocus={() => showMenu(item.title)}
                  onBlur={hideMenu}
                >
                  {item.title}
                  <FaChevronDown className="ml-0.5 h-3.5 w-3.5 opacity-80" />
                </button>

                {/* Dropdown Panel */}
                <div
                  className={`absolute left-0 top-full mt-2 min-w-[360px] rounded-xl border border-gray-200 bg-white/95 p-6 shadow-2xl ring-1 ring-black/5 backdrop-blur transition dark:border-gray-700 dark:bg-[#0C0E12]/95 ${
                    hoverMenu === item.title
                      ? 'visible translate-y-0 opacity-100'
                      : 'invisible -translate-y-1 opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {item.links?.map((link, index) => (
                      <React.Fragment key={link.label}>
                        <Link
                          href={link.url}
                          className="group/link flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-[#414651] hover:bg-gray-50 hover:text-[#155EEF] dark:text-[#CECFD2] dark:hover:bg-[#1D2939] dark:hover:text-white"
                        >
                          <span className="text-[18px] text-[#155EEF] opacity-90 dark:text-blue-400">
                            {link.icon}
                          </span>
                          <span>{link.label}</span>
                        </Link>

                        {(index + 1) % 2 === 0 && index < item.links.length - 1 && (
                          <div className="col-span-2 my-2 border-t border-gray-200 dark:border-gray-700" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDark}
            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-lg text-yellow-500" />
            ) : (
              <FaMoon className="text-lg text-gray-800 dark:text-gray-200" />
            )}
          </button>

          {/* <div className="hidden lg:block">
            <LanguageDropdown />
          </div> */}

          <button className="hidden lg:flex bg-[#155EEF] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
            Book a free demo
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full border border-gray-300 p-2 dark:text-white dark:border-gray-700 xl:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="relative z-50 border-t border-gray-200 bg-[#FFFDF6] dark:border-gray-700 dark:bg-[#0C0E12] xl:hidden">
          <div className="space-y-4 p-4">
            {menuItems.map((item) =>
              item.url ? (
                <Link
                  key={item.title}
                  href={item.url}
                  onClick={() => setMobileOpen(false)}
                  className="block text-[16px] font-semibold text-[#1D1D1D] dark:text-white"
                >
                  {item.title}
                </Link>
              ) : (
                <div key={item.title}>
                  <button
                    onClick={() => setExpandedMenu(expandedMenu === item.title ? null : item.title)}
                    className="mb-2 flex w-full items-center justify-between font-semibold text-[#1D1D1D] dark:text-white"
                  >
                    {item.title}
                    <FaChevronDown
                      className={`ml-2 transition-transform ${
                        expandedMenu === item.title ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedMenu === item.title && (
                    <div className="space-y-1 pl-3">
                      {item.links?.map((link) => (
                        <Link
                          key={link.label}
                          href={link.url}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm text-[#414651] hover:text-[#155EEF] dark:text-[#CECFD2]"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}

            <button className="w-full rounded-lg bg-[#155EEF] px-4 py-2 font-medium text-white hover:bg-blue-700">
              Book a free demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
