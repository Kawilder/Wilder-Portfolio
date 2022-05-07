import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Nav from '../Nav';
import Project from '../Portfolio';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

    //method to see current page
  const renderPage = () => {
    if(currentPage === 'Home') {
      console.log('Home')
      return <Home />
     
    }
    if(currentPage === 'About') {
      console.log('About')
      return <About />
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