import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import PortfolioContainer from './components/PortfolioContainer'
// import About from './components/About';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import './App.css';

const App = () => <PortfolioContainer />

// function App() {
//   const [currentPage, setCurrentPage] = useState('About');
  
//   const renderPage = () => {
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Project') {
//       return <Project />;
//     }
//     if (currentPage === 'Resume') {
//       return <Resume />;
//     }
//     if (currentPage === 'Contact') {
//       return <Contact />;
//     }
//   };
  
//   const handlePageChange = (page) => setCurrentPage(page);
  
//   return (
//     <div>
//       <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
//       {renderPage()}
//       <Footer />
//     </div>
//   );
// }

export default App;
