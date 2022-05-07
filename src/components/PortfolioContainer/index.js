import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Nav from '../Nav';
import Portfolio from '../Portfolio';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Project from '../Pages/Project';
import Resume from '../Pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

    //method to see current page
  const renderPage = () => {
    if(currentPage === 'About') {
      console.log('About')
      return <About />
    }
    if(currentPage === 'Project') {
      console.log('Project')
      return <Project /> 
    }
    if(currentPage === 'Resume') {
      console.log('Resume')
      return <Resume />
    }
    if(currentPage === 'Contact') {
      console.log('Contact')
      return <Contact />
    }
  }


  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}