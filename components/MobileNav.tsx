'use client';

import { useState } from 'react';
import { Home, Building2, MapPin, Truck, MoreHorizontal, X } from 'lucide-react';

export default function MobileNav() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMoreOpen(false);
    }
  };

  const mainNavItems = [
    { icon: Home, label: 'Home', href: '#hero' },
    { icon: Building2, label: 'Central Ops', href: '#central-ops' },
    { icon: MapPin, label: 'GPS & Trips', href: '#tracking' },
    { icon: Truck, label: 'Fleet', href: '#fleet-dashboard' },
    { icon: MoreHorizontal, label: 'More', onClick: () => setIsMoreOpen(true) },
  ];

  const moreItems = [
    { label: 'Why UTrack', href: '#value-proposition' },
    { label: 'Modules', href: '#modules' },
    { label: 'Tracking', href: '#tracking' },
    { label: 'GPS Locations', href: '#locations' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Fleet Dashboard', href: '#fleet-dashboard' },
    { label: 'Mobile Experience', href: '#mobile-experience' },
    { label: 'Our Team', href: '#team' },
    { label: 'Request Demo', href: '#demo' },
  ];

  return (
    <>
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg">
        <div className="grid grid-cols-5 h-16">
          {mainNavItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if (item.onClick) {
                  item.onClick();
                } else if (item.href) {
                  scrollToSection(item.href);
                }
              }}
              className="flex flex-col items-center justify-center space-y-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <item.icon size={20} />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {isMoreOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 rounded-t-3xl shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                All Sections
              </h3>
              <button
                onClick={() => setIsMoreOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X size={24} />
              </button>
            </div>
            <div className="px-6 py-4 space-y-2 pb-8">
              {moreItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
