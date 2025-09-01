import React, { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface NavigationItem {
  id: string;
  title: string;
  href?: string;
  children?: NavigationItem[];
  special?: boolean;
}

const navigationItems: NavigationItem[] = [
  {
    id: 'about',
    title: 'Про Конфедерацію',
    children: [
      { id: 'status', title: 'Статус', href: '/status' },
      { id: 'structure', title: 'Структура', href: '/structure' },
      { id: 'join', title: 'Умови вступу', href: '/join' },
      { id: 'rights', title: 'Права та обов\'язки', href: '/rights' },
      { id: 'tasks', title: 'Завдання Конфедерації', href: '/tasks' },
    ],
  },
  {
    id: 'departments',
    title: 'Відокремлені підрозділи',
    href: '/departments',
  },
  {
    id: 'law',
    title: 'Законодавство',
    href: '/law',
    special: true,
  },
  {
    id: 'activity',
    title: 'Наша діяльність',
    href: '/activity',
  },
  {
    id: 'gallery',
    title: 'Фотогалерея',
    href: '/gallery',
  },
  {
    id: 'news',
    title: 'Новини',
    href: '/news',
  },
  {
    id: 'contacts',
    title: 'Контакти',
    href: '/contacts',
  },
];

interface NavigationSidebarProps {
  className?: string;
}

const NavigationContent: React.FC = () => {
  return (
    <nav className="space-y-2" role="navigation" aria-label="Головна навігація">
      <Accordion type="multiple" className="w-full space-y-1">
        {navigationItems.map((item) => {
          if (item.children) {
            return (
              <AccordionItem key={item.id} value={item.id} className="border-b-0">
                <AccordionTrigger 
                  className={`font-bold text-lg hover:no-underline px-3 py-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/30 transition-colors text-sky-700 dark:text-text-dark-primary hover:text-sky-800 dark:hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    item.special ? 'font-extrabold bg-sky-100 text-sky-900 dark:bg-sky-900/50 dark:text-sky-300' : ''
                  }`}
                  aria-expanded="false"
                >
                  <div className="flex items-center gap-2">
                    {item.special && <Scale className="h-5 w-5" />}
                    {item.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="space-y-1 ml-4">
                    {item.children.map((child) => (
                      <a
                        key={child.id}
                        href={child.href}
                        className="nav-item block font-medium text-base py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-text-light-body dark:text-text-dark-secondary hover:text-text-light-primary dark:hover:text-text-dark-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                        tabIndex={0}
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          }

          return (
            <div key={item.id} className="px-1">
              <a
                href={item.href}
                className={`nav-item block font-bold text-lg py-3 px-3 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                  item.special 
                    ? 'font-extrabold bg-sky-100 text-sky-900 dark:bg-sky-900/50 dark:text-sky-300 border-l-4 border-sky-500' 
                    : 'text-sky-700 dark:text-text-dark-primary hover:text-sky-800 dark:hover:text-sky-300'
                }`}
                tabIndex={0}
              >
                <div className="flex items-center gap-2">
                  {item.special && <Scale className="h-5 w-5" />}
                  {item.title}
                </div>
              </a>
            </div>
          );
        })}
      </Accordion>
    </nav>
  );
};

const NavigationSidebar: React.FC<NavigationSidebarProps> = ({ className = '' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden lg:block w-72 shrink-0 border-r bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm ${className}`} role="complementary">
        <div className="sticky top-0 h-screen p-6 overflow-y-auto">
          <NavigationContent />
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="bg-background/95 backdrop-blur"
              aria-label="Відкрити меню"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Навігація</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Закрити меню"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <NavigationContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default NavigationSidebar;