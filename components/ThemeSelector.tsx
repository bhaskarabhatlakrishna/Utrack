'use client';

import { useState } from 'react';
import { Palette, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { primaryColor, accentColor, mode, setPrimaryColor, setAccentColor, toggleMode } = useTheme();

  const colors = [
    { name: 'blue', class: 'bg-blue-600' },
    { name: 'emerald', class: 'bg-emerald-600' },
    { name: 'violet', class: 'bg-violet-600' },
    { name: 'teal', class: 'bg-teal-600' },
    { name: 'amber', class: 'bg-amber-600' },
    { name: 'rose', class: 'bg-rose-600' },
  ] as const;

  return (
    <div className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-40">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6 space-y-6 mb-2">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Primary Color
            </h4>
            <div className="grid grid-cols-6 gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setPrimaryColor(color.name)}
                  className={`w-10 h-10 rounded-lg ${color.class} transition-all ${primaryColor === color.name
                      ? 'ring-4 ring-offset-2 ring-gray-400 dark:ring-gray-600 scale-110'
                      : 'hover:scale-105'
                    }`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Theme Mode
            </h4>
            <button
              onClick={toggleMode}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
              </span>
              {mode === 'light' ? (
                <Sun size={20} className="text-amber-600" />
              ) : (
                <Moon size={20} className="text-blue-400" />
              )}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all flex items-center justify-center"
      >
        <Palette size={24} />
      </button>
    </div>
  );
}
