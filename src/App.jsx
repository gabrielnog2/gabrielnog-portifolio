import React, { useState } from "react";
import Header from "./components/Header"; // Verifique se o caminho da pasta está correto
import Footer from "./components/Footer";
import Walkman from "./components/Walkman";


import Sobre from "./sections/Sobre";
import Projetos from "./sections/Projetos";

import "./index.css"; 

function App() {

  const tracks = [
    { 
      id: "01", 
      vol: "VOL. 1",
      title: "SOBRE MIM", 
      component: <Sobre /> 
    },
    { 
      id: "02", 
      vol: "VOL. 2",
      title: "PROJETOS", 
      component: <Projetos /> 
    }
    
  ];

  
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);


  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  
  const currentTrack = tracks[currentTrackIndex];

  return (
    <div className="app-container">
      
      
      <Header />

      <main className="main-content-area">
        <div className="sci-fi-monitor">
          
          {currentTrack.component}
        </div>
      </main>

     
      <div className="walkman-widget">
        <Walkman 
          title={`AWESOME MIX ${currentTrack.vol}`} 
          content={`TRACK ${currentTrack.id} - ${currentTrack.title}`} 
          next={nextTrack} 
          prev={prevTrack} 
        />
      </div>

     
      <Footer />

    </div>
  );
}

export default App;