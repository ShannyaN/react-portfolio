import React, { useState } from 'react';
import Header from './Header';
import Portfolio from '../pages/Portfolio';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function Content() {
  const [currentPage, setCurrentPage] = useState('AboutMe');


  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <Header /> */}
      {renderPage()}
    </div>
  );
}