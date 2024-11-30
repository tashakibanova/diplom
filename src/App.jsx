import * as React from 'react';
import Header from './components/Header';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export function App() {
  return (
    <div className="page">
      <Header />
      <About />
      <HowItWorks />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
