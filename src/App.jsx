import './App.css'
import './index.css'
import React from 'react';  // ✅ add this line
import Header from './container/Header';
import Section1 from './container/Section1';
import Section2 from './container/Section2';
import Section3 from './container/Section3';
import Section4 from './container/Section4';
import Section5 from './container/Section5';
import Section6 from './container/Section6';
import Footer from './container/Footer';

function App() {
  return (
    <div className="bg-neutral-200  min-h-screen">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  )
}


export default App


