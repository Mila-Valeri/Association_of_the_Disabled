import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="relative overflow-hidden px-[7vw] py-14 bg-header-light dark:bg-header-dark" role="banner">
      {/* Theme Toggle - top right corner */}
      <div className="absolute right-[2vw] top-5">
        <ThemeToggle />
      </div>
      
      {/* Main header content */}
      <div className="mx-auto flex max-w-[1320px] items-center justify-center gap-8">
        {/* Logo/Emblem - left side */}
        <div className="hidden md:block shrink-0">
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/25 rounded-full flex items-center justify-center ring-1 ring-white/40 shadow-lg backdrop-blur-sm">
            <span className="text-sm lg:text-base font-extrabold text-text-light-primary dark:text-text-dark-primary">CONFEDER</span>
          </div>
        </div>
        
        {/* Organization Title - main content */}
        <div className="min-w-0 text-center md:flex-1">
          {/* Mobile logo - above title */}
          <div className="md:hidden mb-4 flex justify-center">
            <div className="w-20 h-20 bg-white/25 rounded-full flex items-center justify-center ring-1 ring-white/40 shadow-lg backdrop-blur-sm">
              <span className="text-sm font-extrabold text-text-light-primary dark:text-text-dark-primary">CONFEDER</span>
            </div>
          </div>
          
          <h1 className="font-extrabold leading-tight text-[32px] md:text-[40px] lg:text-[48px] tracking-tight text-text-light-primary dark:text-text-dark-primary drop-shadow-text">
            ВСЕУКРАЇНСЬКА СПІЛКА ГРОМАДСЬКИХ ОРГАНІЗАЦІЙ
          </h1>
          
          <p className="mt-3 font-bold leading-snug text-[22px] md:text-[28px] lg:text-[32px] text-text-light-body dark:text-text-dark-body drop-shadow-text">
            «КОНФЕДЕРАЦІЯ ГРОМАДСЬКИХ ОРГАНІЗАЦІЙ ЛЮДЕЙ З ІНВАЛІДНІСТЮ УКРАЇНИ»
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;