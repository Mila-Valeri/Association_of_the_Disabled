import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PartnerOrganization {
  id: string;
  name: string;
  description: string;
  url: string;
  color: string;
}

const partnerOrganizations: PartnerOrganization[] = [
  {
    id: '1',
    name: 'Fund for Social Protection of Persons with Disabilities',
    description: '',
    url: 'https://example.com',
    color: 'from-purple-500 to-blue-600',
  },
  {
    id: '2',
    name: 'Ministry of Social Policy of Ukraine',
    description: '',
    url: 'https://example.com',
    color: 'from-blue-400 to-purple-500',
  },
  {
    id: '3',
    name: 'Government Portal',
    description: 'Unified web portal of Ukraine\'s executive authorities',
    url: 'https://example.com',
    color: 'from-blue-600 to-purple-700',
  },
  {
    id: '4',
    name: 'President of Ukraine',
    description: 'Official Internet Representation',
    url: 'https://example.com',
    color: 'from-green-400 to-blue-500',
  },
  {
    id: '5',
    name: 'Verkhovna Rada of Ukraine',
    description: 'Official web portal of the Parliament of Ukraine',
    url: 'https://example.com',
    color: 'from-purple-600 to-blue-700',
  },
  {
    id: '6',
    name: 'prozorro',
    description: 'Public procurement',
    url: 'https://example.com',
    color: 'from-teal-400 to-blue-500',
  },
];

const MainContent: React.FC = () => {
  return (
    <main className="flex-1" role="main">
      {/* Dear friends section */}
      <section className="py-8 md:py-12">
        <div className="max-w-[72ch] mx-auto">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 mb-12 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">Шановні друзі!</h2>
            
            <div className="content-text space-y-4 leading-7 font-medium">
              <p className="text-slate-800 dark:text-slate-200">
                Вітаємо Вас на сайті Всеукраїнської спілки громадських організацій «Конфедерація громадських організацій інвалідів України». Створення нашого ресурсу є необхідним та цілеспрямованим кроком для надання інформаційної та консультаційної допомоги людям з особливими потребами.
              </p>
              
              <p className="text-slate-800 dark:text-slate-200">
                Internet є невід'ємною частиною інвалідного руху у всьому світі. Ми також вирішили приділити особливу увагу цьому процесу. І сьогодні нами зроблено ще один крок, спрямований на покращення спілкування та обмін інформацією між інвалідами в кожному куточку нашої країни та далеко за її межами. Сподіваємось, що наш ресурс стане корисним джерелом цікавої та актуальної інформації.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Organizations section */}
      <section className="py-8 md:py-12" aria-labelledby="partner-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="partner-heading" className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200">
            Партнерські організації
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerOrganizations.map((org) => (
              <a
                key={org.id}
                href={org.url}
                className={`group block p-6 rounded-2xl bg-gradient-to-br ${org.color} text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transform hover:-translate-y-1`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Відвідати ${org.name} (відкривається у новій вкладці)`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-xl leading-tight group-hover:text-white transition-colors">
                    {org.name}
                  </h3>
                  <ExternalLink className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                </div>
                
                {org.description && (
                  <p className="text-white/90 font-medium leading-relaxed">
                    {org.description}
                  </p>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;