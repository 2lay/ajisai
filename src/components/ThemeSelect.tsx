'use client';

import { useTheme } from './ThemeProvider';

export function ThemeSelect() {
    const { theme, setTheme } = useTheme();
  
    return (
        <div    className="absolute top-4 right-4 z-[9999]">  
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="transition-colors duration-500 bg-white dark:bg-neutral-800 text-black dark:text-white p-2 rounded border border-neutral-300 dark:border-neutral-600"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      </div>   
    );
}
