import React from 'react';

export default function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" href="#aboutme" 
                onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >About Me</a>
              <a class="nav-link" href="#">Portfolio</a>
              <a class="nav-link" href="#">Contact</a>
              <a class="nav-link">Resume</a>
            </div>
          </div>
        </div>
      </nav>
    )
}