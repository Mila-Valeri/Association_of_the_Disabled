import React from 'react';
import Header from '@/components/Header';
import NavigationSidebar from '@/components/NavigationSidebar';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

const Index: React.FC = () => {

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="mx-auto max-w-[1320px] px-[5.5vw]">
        <div className="flex">
          <NavigationSidebar />
          <MainContent />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;