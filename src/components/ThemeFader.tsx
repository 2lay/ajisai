'use client';
import { useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export function ThemeFader() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    root.style.transition = 'background-color 500ms ease, color 500ms ease';
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  return null;
}

