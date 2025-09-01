import React from 'react';
import { Phone, Mail, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-footer-light dark:bg-footer-dark mt-16" role="contentinfo">
      {/* Оверлей для покращення читабельності */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent dark:from-black/25 dark:to-transparent"></div>
      
      <div className="relative max-w-[1320px] mx-auto px-[5.5vw] py-10">
        {/* Розділювач */}
        <div className="border-t border-text-light-primary/30 dark:border-text-dark-primary/20 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="backdrop-blur-sm bg-white/5 dark:bg-black/10 rounded-lg p-4">
              <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mb-3 leading-tight">
                Всеукраїнська спілка громадських організацій<br />
                «Конфедерація громадських організацій інвалідів України»
              </h3>
              <p className="text-text-light-body dark:text-text-dark-body text-sm leading-relaxed">
                Інформаційна та консультаційна підтримка людям з особливими потребами по всій Україні.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="backdrop-blur-sm bg-white/5 dark:bg-black/10 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-4">Зв'язатися з нами:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-indigo shrink-0" aria-hidden="true" />
                  <span className="text-text-light-body dark:text-text-dark-body font-medium">+38073042452</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-indigo shrink-0" aria-hidden="true" />
                  <a 
                    href="mailto:vsgo@ukr.net" 
                    className="text-text-light-body dark:text-text-dark-body hover:text-text-light-primary dark:hover:text-text-dark-primary transition-colors font-medium"
                    aria-label="Написати електронного листа"
                  >
                    vsgo@ukr.net
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <div className="backdrop-blur-sm bg-white/5 dark:bg-black/10 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-4">Соціальні мережі:</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-brand-indigo hover:bg-brand-darkIndigo rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  aria-label="Facebook (відкривається у новій вкладці)"
                >
                  <Facebook className="h-6 w-6 text-white" aria-hidden="true" />
                </a>
              </div>
              
              {/* Копірайт */}
              <div className="mt-6 pt-4 border-t border-text-light-primary/20 dark:border-text-dark-primary/20">
                <p className="text-sm text-text-light-body dark:text-text-dark-body leading-relaxed">
                  © 2025 Конфедерація організацій осіб з інвалідністю України.<br />
                  Всі права захищені.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 Конфедерація організацій осіб з інвалідністю України. Всі права захищені.
            </p>
            <p className="text-slate-400 text-sm">
              Створено для покращення доступності інформації
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;