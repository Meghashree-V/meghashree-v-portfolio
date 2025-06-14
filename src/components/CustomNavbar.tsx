import React, { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
];

const SOCIALS = [
  { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/meghaa-v/' },
  { icon: <Github size={20} />, href: 'https://github.com/Meghashree-V' },
];

export const CustomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-4 sm:py-6 sm:px-8 fixed top-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="flex w-full items-center justify-between">
        {/* Mobile: Hamburger left, socials/connect right */}
        <div className="flex w-full items-center justify-between sm:hidden">
          <span className="mr-2">
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </span>
          <div className="flex items-center gap-2">
            <a
              href={SOCIALS[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/60 text-white p-2 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-purple-400 transition-colors"
            >
              {SOCIALS[0].icon}
            </a>
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-1 rounded-full font-semibold text-sm shadow-lg hover:shadow-[0_0_10px_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Let's Connect
            </button>
            <a
              href={SOCIALS[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/60 text-white p-2 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-purple-400 transition-colors"
            >
              {SOCIALS[1].icon}
            </a>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="hidden sm:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            item.label === 'Achievements' ? (
              <a
                key={item.label}
                href={item.href}
                className="text-white text-lg font-semibold px-4 py-2 rounded transition-colors hover:text-purple-400 focus:text-purple-400"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('achievements');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-white text-lg font-semibold px-4 py-2 rounded transition-colors hover:text-purple-400 focus:text-purple-400"
              >
                {item.label}
              </a>
            )
          ))}
        </div>
        {/* Socials and Connect: only on desktop */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={SOCIALS[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/60 text-white p-2 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-purple-400 transition-colors"
          >
            {SOCIALS[0].icon}
          </a>
          <button
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-5 py-2 rounded-full font-semibold text-base shadow-lg hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Let's Connect
          </button>
          <a
            href={SOCIALS[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/60 text-white p-2 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-purple-400 transition-colors"
          >
            {SOCIALS[1].icon}
          </a>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 flex flex-col items-center justify-start pt-20 sm:hidden">
          <div className="flex flex-col gap-6 w-full items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white text-xl font-semibold px-4 py-2 rounded transition-colors hover:text-purple-400 focus:text-purple-400"
                onClick={e => {
                  setMenuOpen(false);
                  if (item.label === 'Achievements') {
                    e.preventDefault();
                    const el = document.getElementById('achievements');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
