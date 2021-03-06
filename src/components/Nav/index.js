import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <h1 className='webpage-title'>Kevin Wilder</h1>
      <li className="nav-item">
        <a
          href="#About"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Projects"
          onClick={() => handlePageChange('Project')}
          className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="Resume">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

