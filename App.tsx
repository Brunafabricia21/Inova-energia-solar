import React from 'react';
<<<<<<< HEAD
import  Navbar  from './components/Navbar';
import  Hero  from './components/Hero';
import  SolarInfo  from './components/SolarInfo';
import  Advantages  from './components/Advantages';
import  About  from './components/About';
import  QuoteForm  from './components/QuoteForm';
import  Footer  from './components/Footer';
import  SolarAssistant  from './components/SolarAssistant';
=======
import  Navbar  from './components/Navbar';
import  Hero  from './components/Hero';
import  SolarInfo  from './components/SolarInfo';
import Advantages  from './components/Advantages';
import  About  from './components/About';
import  QuoteForm  from './components/QuoteForm';
import  Footer  from './components/Footer';
import  SolarAssistant  from './components/SolarAssistant';
>>>>>>> origin/main

function App() {
  return (
    <div className="min-h-screen bg-tech-950 selection:bg-solar-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <SolarInfo />
        <Advantages />
        <About />
        <QuoteForm />
      </main>
      <Footer />
      <SolarAssistant />
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> origin/main
