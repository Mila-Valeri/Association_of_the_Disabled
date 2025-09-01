
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply theme on initial load
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleThemeToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleThemeToggle}
        className="inline-flex h-7 w-14 items-center rounded-full bg-white/20 backdrop-blur-sm p-0.5 ring-1 ring-inset ring-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-transparent hover:bg-white/30 dark:bg-black/20 dark:ring-white/20 dark:hover:bg-black/30"
        aria-label="Toggle theme"
      >
        {/* Toggle Circle */}
        <span className="sr-only">Змінити тему</span>
        <span className={`h-6 w-6 rounded-full bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 flex items-center justify-center ${isDark ? 'translate-x-7' : 'translate-x-0'} dark:bg-slate-800/90`}>
          {isDark ? (
            <Moon className="h-3 w-3 text-slate-700 dark:text-slate-300" aria-hidden="true" />
          ) : (
            <Sun className="h-3 w-3 text-yellow-600" aria-hidden="true" />
          )}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
