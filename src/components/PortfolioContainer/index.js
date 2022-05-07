import React, { useState } from 'react';
import About from '../About';
import Footer from "../Footer";
import Header from "../Header";
import ContactForm from "../Contact";
import Nav from "../Nav";
import Project from "../Project";
import Resume from "../Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

    //method to see current page
  const renderPage = () => {
    if(currentPage === 'About') {
      console.log('about')
      return <About />
     
    }
    if(currentPage === 'Project') {
      console.log('project')
      return <Project />
    }
    if(currentPage === 'ContactForm') {
      console.log('form')
      return <ContactForm />
    }
    if(currentPage === 'Resume') {
      return <Resume />
    }
  }


  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}