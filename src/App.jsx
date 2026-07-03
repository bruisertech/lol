import React from 'react';
import AccessibilitySidebar from './components/AccessibilitySidebar';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import SoatQuote from './components/SoatQuote';
import Widget1 from './components/Widget1';
import Widget2 from './components/Widget2';
import Widget3 from './components/Widget3';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="relative min-h-screen">
      <AccessibilitySidebar />
      <Header />
      <HeroCarousel />
      <main>
        <SoatQuote />
        <Widget1 />
        <Widget2 />
        <Widget3 />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
