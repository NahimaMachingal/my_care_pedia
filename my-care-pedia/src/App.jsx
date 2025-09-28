import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Home2 from './pages/Home/Home2';
import Home3 from './pages/Home/Home3';
import Section4 from './pages/Home/Section4';
import Section5 from './pages/Home/Section5';
import Section6 from './pages/Home/Section6';
import Section7 from './pages/Home/Section7';
import Section8 from './pages/Home/Section8';
import Blog from './pages/Home/Blog';
import Footer1 from './pages/Footer/Footer1';
import Footer from './pages/Footer/Footer';
import Carousel from './pages/Home/Carousel';
function App() {
  return (
    <>
    
      <Header />
      <Carousel />
      <Home />
      <Home2 />
      <Home3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Blog />
      <Footer1 />
      <Footer />
      </>
  );
}

export default App;
