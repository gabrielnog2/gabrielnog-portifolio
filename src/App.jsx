import { useState } from "react";
import Layout from "./components/Layout";
import Sobre from "./sections/Sobre";
import Projetos from "./sections/Projetos";
import Experiencia from "./sections/Experiencia";
import Contato from "./sections/Contato";

function App() {
  const sections = [
    { title: "Track 01 - Sobre Mim", component: <Sobre /> },
    { title: "Track 02 - Projetos", component: <Projetos /> },
    { title: "Track 03 - Experiências", component: <Experiencia /> },
    { title: "Track 04 - Contato", component: <Contato /> },
  ];

  const [currentTrack, setCurrentTrack] = useState(0);

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % sections.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <Layout
      title={sections[currentTrack].title}
      content={sections[currentTrack].component}
      next={nextTrack}
      prev={prevTrack}
    />
  );
}

export default App;