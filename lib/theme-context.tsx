'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ColorOption = 'blue' | 'emerald' | 'violet' | 'teal' | 'amber' | 'rose';
type Mode = 'light' | 'dark';

interface ThemeContextType {
  primaryColor: ColorOption;
  accentColor: ColorOption;
  mode: Mode;
  setPrimaryColor: (color: ColorOption) => void;
  setAccentColor: (color: ColorOption) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const colorClasses = {
  blue: {
    bg: 'bg-blue-600',
    text: 'text-blue-600',
    border: 'border-blue-600',
    hover: 'hover:bg-blue-700',
    gradient: 'from-blue-500 to-blue-700',
  },
  emerald: {
    bg: 'bg-emerald-600',
    text: 'text-emerald-600',
    border: 'border-emerald-600',
    hover: 'hover:bg-emerald-700',
    gradient: 'from-emerald-500 to-emerald-700',
  },
  violet: {
    bg: 'bg-violet-600',
    text: 'text-violet-600',
    border: 'border-violet-600',
    hover: 'hover:bg-violet-700',
    gradient: 'from-violet-500 to-violet-700',
  },
  teal: {
    bg: 'bg-teal-600',
    text: 'text-teal-600',
    border: 'border-teal-600',
    hover: 'hover:bg-teal-700',
    gradient: 'from-teal-500 to-teal-700',
  },
  amber: {
    bg: 'bg-amber-600',
    text: 'text-amber-600',
    border: 'border-amber-600',
    hover: 'hover:bg-amber-700',
    gradient: 'from-amber-500 to-amber-700',
  },
  rose: {
    bg: 'bg-rose-600',
    text: 'text-rose-600',
    border: 'border-rose-600',
    hover: 'hover:bg-rose-700',
    gradient: 'from-rose-500 to-rose-700',
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [primaryColor, setPrimaryColor] = useState<ColorOption>('blue');
  const [accentColor, setAccentColor] = useState<ColorOption>('emerald');
  const [mode, setMode] = useState<Mode>('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('theme-mode') as Mode;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider
      value={{
        primaryColor,
        accentColor,
        mode,
        setPrimaryColor,
        setAccentColor,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
