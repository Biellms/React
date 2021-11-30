import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Carrosel from './components/carrossel/CarouselComponent';
import Home from './paginas/home/Home';

function App() {
  return (
    <>
      <Navbar />
        <Carrosel />
        <Home />
      <Footer />
    </>
  );
}

export default App;
