import React, { useState } from 'react'; 
//parts of the page present no matter what
import Header from './Header';
import Footer from './Footer'
//the page files referenced within the navbar 
import Portfolio from '../pages/Portfolio';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import projectList from './ProjectList';


export default function Content() {
  const [currentPage, setCurrentPage] = useState('AboutMe');
//based on the tab of the navbar selected/the currentPage state, the content of the page will be rendered
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio projectList={projectList} />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };
//assigning the state of the current
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='back'>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
}
