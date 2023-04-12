import React from 'react';

export default function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a class="nav-link active" href="#aboutme" 
                onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >About Me</a>
              <a className="nav-link" href="#">Portfolio</a>
              <a className="nav-link" href="#">Contact</a>
              <a className="nav-link">Resume</a>
            </div>
          </div>
        </div>
      </nav>
    )
}