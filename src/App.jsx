import './App.css'
import './index.css'
import React, { useState } from "react";
import Header from "./components/Header.jsx"
import Hero from './components/Hero.jsx';
import ConsultationBar from './components/ConsultationBar.jsx';
import Footer from './components/Footer.jsx';
function App() {
  const [zoom, setZoom] = useState(1);

  return (
    <>
    <ConsultationBar />
    <Header/>
    <Hero />
    <Footer />
    </>
      
  );
}

export default App;

