import React from 'react'; 
import Navbar from './Navbar';
// import Navbar from './Navbar';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="App-header">
        <h1> Shannya Niveyro </h1>
        {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/> */}
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a href='#aboutme' onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >About Me</a>
               <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >Portfolio</a>
                <a href='#'
                className='nav-link'
                >Contact</a>
                 <a href='#'
                className='nav-link'
                >Resume</a>
              {/* <a href='#contact' onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact</a>
              <a href='#resume' onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >Resume</a> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;