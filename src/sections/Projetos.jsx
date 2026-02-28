import React, { useState } from 'react';
import './Projetos.css';
import fabricaImg from '../assets/fabric.png';
import budgetImg from '../assets/budget.png';
import reiImg from '../assets/rei.png';

function Projetos() {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const projectsData = {
    pt: {
      vol: "AWESOME MIX VOL. 2",
      title: "DIÁRIO DE BORDO: PROJETOS",
      btn: "SWITCH TO ENGLISH",
      items: [
        {
          id: 1,
          name: "Fábrica de Histórias",
          desc: "Um sistema para autores emergentes terem espaço para divulgação.",
          tech: ["HTML", "CSS", "JS", "Java", "Spring Boot"],
          link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-2-ti2-1381100-fabrica-de-historias/tree/main/docs/video",
          image: fabricaImg
        },
        {
          id: 2,
          name: "Budget Software",
          desc: "Sistema completo para gestão em engenharia civil.",
          tech: ["HTML", "CSS", "JS", "Java", "Spring Boot"],
          link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-1-ti3-898110-grupo-4-sistema-de-engenharia/blob/main/Divulgacao/Video/Meu%20V%C3%ADdeo%20(1).mp4",
          image: budgetImg
        },
        {
          id: 3,
          name: "Rei do Cabeçote",
          desc: "Sistema integrado de gerenciamento de oficina retífica.",
          tech: ["React", "Node.js", "Java", "Spring Boot"],
          link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-2-ti3-5533100-rei-do-cabecote/blob/main/Divulgacao/Video/Video_apresentacao.mp4",
          image: reiImg
        }
      ]
    },

    en: {
      vol: "AWESOME MIX VOL. 2",
      title: "CAPTAIN'S LOG: PROJECTS",
      btn: "MUDAR PARA PORTUGUÊS",
      items: [
        {
          id: 1,
          name: "Story Factory",
          desc: "A system designed to give emerging authors a space for promotion and visibility.",
          tech: ["HTML", "CSS", "JS", "Java", "Spring Boot"],
          link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-2-ti2-1381100-fabrica-de-historias/tree/main/docs/video",
          image: fabricaImg
        },
        {
          id: 2,
          name: "Budget Software",
          desc: "A complete system for civil engineering management.",
          tech: ["HTML", "CSS", "JS", "Java", "Spring Boot"],
          link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-1-ti3-898110-grupo-4-sistema-de-engenharia/blob/main/Divulgacao/Video/Meu%20V%C3%ADdeo%20(1).mp4",
          image: budgetImg
        },
        {
          id: 3,
          name: "Cylinder Head King",
          desc: "An integrated management system for an automotive reconditioning workshop.",
          tech: ["React", "Node.js", "Java", "Spring Boot"],
          link: "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-2-ti3-5533100-rei-do-cabecote/blob/main/Divulgacao/Video/Video_apresentacao.mp4",
          image: reiImg
        }
      ]
    }
  };

  return (
    <div className="projetos-container fade-in">
      
      <div className="language-toggle-wrapper">
        <button className="cyber-btn" onClick={toggleLanguage}>
          {projectsData[language].btn}
        </button>
      </div>

      <div className="projetos-header">
        <p className="tape-volume">{projectsData[language].vol}</p>
        <h2 className="section-title">{projectsData[language].title}</h2>
      </div>

      <div className="projects-grid">
        {projectsData[language].items.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="card-scanline"></div>

            {project.image && (
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
              </div>
            )}

            <div className="card-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-techs">
                {project.tech.map((t, index) => (
                  <span key={index} className="tech-badge">{t}</span>
                ))}
              </div>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                LOG_DATA ➔
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Projetos;