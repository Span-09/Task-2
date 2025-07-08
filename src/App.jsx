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
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        overflow: "auto",
        background: "#fff"
      }}
    >
      <ConsultationBar />

      <div
        style={{
          width: `${100 / zoom}vw`,      // <-- Adjust width based on zoom
          height: `${100 / zoom}vh`,     // <-- Adjust height based on zoom
          transform: `scale(${zoom})`,
          transformOrigin: "top left",
          transition: "transform 0.2s, width 0.2s, height 0.2s"
        }}
      >
        <Header zoom={zoom} setZoom={setZoom} />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;

