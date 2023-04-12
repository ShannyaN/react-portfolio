import React, { useState } from 'react';
// import Home from './pages/Home';
// import About from './pages/About';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

export default function Content() {
  const [currentPage, setCurrentPage] = useState('AboutMe');


  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    // if (currentPage === 'About') {
    //   return <About />;
    // }
    // if (currentPage === 'Blog') {
    //   return <Blog />;
    // }
    // return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
