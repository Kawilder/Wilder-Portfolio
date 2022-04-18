import React, { useState } from 'react';
import './App.css';
//import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Project from './components/Portfolio';
import Resume from './components/Resume';
  
function App() {
  const [currentPage, setCurrentPage] = useState('About');
  
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
