import React, { useState } from 'react';
import './Sobre.css';

function Sobre() {
  const [language, setLanguage] = useState('pt'); 

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const content = {
    pt: {
      title: "INICIANDO SISTEMA...",
      subtitle: "SOBRE MIM",
      bio1: "Olá! Sou Gabriel Nogueira, estudante de Engenharia de Software na PUC Minas. Possuo um ano de experiência na área de tecnologia voltada a suporte de sistemas e desenvolvimento de agentes de IA. Além disso, sou graduado em Administração pela UFMG e já atuei nas áreas de Consultoria, Marketing e Financeira.",
      btn: "SWITCH TO ENGLISH",
      techTitle: "LINGUAGENS",
      frameTitle: "FRAMEWORKS"
    },
    en: {
      title: "SYSTEM BOOT...",
      subtitle: "ABOUT ME",
      bio1: "Hello! I'm Gabriel Nogueira, a Software Engineering student at PUC Minas. I have one year of experience in the tech industry focused on IT support and AI agent development. Additionally, I hold a degree in Business Administration from UFMG and have previous experience in Consulting, Marketing, and Finance.",
      btn: "MUDAR PARA PORTUGUÊS",
      techTitle: "LANGUAGES",
      frameTitle: "FRAMEWORKS"
    }
  };

  return (
    <div className="sobre-container fade-in">
      
      <div className="language-toggle-wrapper">
        <button className="cyber-btn" onClick={toggleLanguage}>
          {content[language].btn}
        </button>
      </div>

      <div className="sobre-content">
        
        <div className="profile-image-wrapper">
          <div className="holo-ring"></div>
          <img 
            src="/puconero.jpg" 
            alt="Gabriel Nogueira" 
            className="profile-img"
          />
        </div>

        <div className="text-wrapper">
          <p className="system-status">{content[language].title}</p>
          <h2 className="section-title">{content[language].subtitle}</h2>
          
          <div className="bio-text">
            <p>{content[language].bio1}</p>
          </div>

          {/* === PAINEL DE TECNOLOGIAS EMBUTIDO ABAIXO DO TEXTO === */}
          <div className="tech-mini-panel">
            
            {/* Linha Divisória */}
            <div className="cyber-divider"></div>
            
            <div className="tech-row">
              <span className="tech-label">{content[language].techTitle}:</span>
              <div className="tech-icons-small">
                <div className="tech-item-small" title="C"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" /></div>
                <div className="tech-item-small" title="HTML5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" /></div>
                <div className="tech-item-small" title="CSS3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" /></div>
                <div className="tech-item-small" title="JavaScript"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" /></div>
                <div className="tech-item-small" title="Java"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" /></div>
                <div className="tech-item-small" title="Python"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" /></div>
              </div>
            </div>

            <div className="tech-row">
              <span className="tech-label">{content[language].frameTitle}:</span>
              <div className="tech-icons-small">
                <div className="tech-item-small" title="React"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /></div>
                <div className="tech-item-small" title="Node.js"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node" /></div>
                <div className="tech-item-small" title="Spring Boot"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring" /></div>
                <div className="tech-item-small" title="Django"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="Django" /></div>
                <div className="tech-item-small" title="Tailwind CSS"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" /></div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Sobre;