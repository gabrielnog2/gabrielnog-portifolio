import React, { useState, useEffect } from 'react';
import './Experiencia.css';

function Experiencia() {
  const [language, setLanguage] = useState('pt');
  const [activeExpIndex, setActiveExpIndex] = useState(0);
  const [isDecrypting, setIsDecrypting] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const handleMissionChange = (index) => {
    if (index === activeExpIndex) return;
    setIsDecrypting(true);
    setActiveExpIndex(index);
  };

  
  useEffect(() => {
    if (isDecrypting) {
      const timer = setTimeout(() => {
        setIsDecrypting(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isDecrypting]);

  const expData = {
    pt: {
      vol: "AWESOME MIX VOL. 3",
      title: "ARQUIVOS DA TELA DE COMANDO: EXPERIÊNCIA",
      btn: "SWITCH TO ENGLISH",
      missionLog: "SELECIONE O REGISTRO",
      statusLabel: "STATUS DA OPERAÇÃO: ",
      decryptMsg: "DESCRIPTOGRAFANDO DADOS...",
      items: [
        {
          id: 1,
          logId: "LOG-A77.1",
          coords: "SCT-09 // LAT-B",
          company: "Nova Corp IT",
          role: "Engenheiro de Sistemas",
          period: "2023 - Presente",
          status: "EM CURSO",
          desc: "Manutenção de infraestrutura crítica e automação de processos em ambientes cloud distribuídos. Implementação de rotinas de CI/CD para garantir a integridade dos sistemas de comunicação da frota.",
          tech: ["Cloud", "DevOps", "Python", "CI/CD"]
        },
        {
          id: 2,
          logId: "LOG-X22.4",
          coords: "XND-44 // SEC-7",
          company: "Xandar Tech",
          role: "Analista de Suporte",
          period: "2021 - 2023",
          status: "CONCLUÍDA",
          desc: "Resolução de anomalias em sistemas de comunicação e suporte a frotas de usuários em larga escala. Neutralização de bugs críticos e otimização de banco de dados intergalático.",
          tech: ["Troubleshooting", "SQL", "Networking"]
        },
        {
          id: 3,
          logId: "LOG-E01.9",
          coords: "TER-01 // NY-HQ",
          company: "Stark Expo",
          role: "Estagiário de Tech",
          period: "2019 - 2020",
          status: "ARQUIVADA",
          desc: "Auxílio na organização de eventos técnicos e suporte à demonstração de protótipos de hardware avançado. Gerenciamento de rede local para os expositores VIPs.",
          tech: ["Eventos", "Hardware", "Redes"]
        }
      ]
    },
    en: {
      vol: "AWESOME MIX VOL. 3",
      title: "COMMAND DECK ARCHIVES: EXPERIENCE",
      btn: "MUDAR PARA PORTUGUÊS",
      missionLog: "SELECT LOG ENTRY",
      statusLabel: "OPERATION STATUS: ",
      decryptMsg: "DECRYPTING DATA...",
      items: [
        {
          id: 1,
          logId: "LOG-A77.1",
          coords: "SCT-09 // LAT-B",
          company: "Nova Corp IT",
          role: "Systems Engineer",
          period: "2023 - Present",
          status: "ONGOING",
          desc: "Critical infrastructure maintenance and process automation in distributed cloud environments. CI/CD routine implementation to ensure fleet communication system integrity.",
          tech: ["Cloud", "DevOps", "Python", "CI/CD"]
        },
        {
          id: 2,
          logId: "LOG-X22.4",
          coords: "XND-44 // SEC-7",
          company: "Xandar Tech",
          role: "Support Analyst",
          period: "2021 - 2023",
          status: "COMPLETED",
          desc: "Communication system anomaly resolution and large-scale user fleet support. Critical bug neutralization and intergalactic database optimization.",
          tech: ["Troubleshooting", "SQL", "Networking"]
        },
        {
          id: 3,
          logId: "LOG-E01.9",
          coords: "TER-01 // NY-HQ",
          company: "Stark Expo",
          role: "Tech Intern",
          period: "2019 - 2020",
          status: "ARCHIVED",
          desc: "Assisting in technical event organization and advanced hardware prototype demonstration support. Local network management for VIP exhibitors.",
          tech: ["Events", "Hardware", "Networks"]
        }
      ]
    }
  };

  const current = expData[language];
  const activeExp = current.items[activeExpIndex];

  return (
    <div className="experiencia-container fade-in">
      
      <div className="experiencia-top-controls">
        <div className="system-readout">
          <span className="blinking-dot"></span>
          SYS.ONLINE // UPLINK SECURE
        </div>
        <button className="cyber-btn exp-btn" onClick={toggleLanguage}>
          {current.btn}
        </button>
      </div>

      <div className="experiencia-header">
        <p className="tape-volume">{current.vol}</p>
        <h2 className="section-title hud-title">{current.title}</h2>
      </div>

      <div className="mission-deck-layout">
        
   
        <aside className="mission-list-panel">
          <div className="mission-list-header">
            <span>{current.missionLog}</span>
            <div className="header-decor-line"></div>
          </div>
          
          <div className="mission-items">
            {current.items.map((exp, index) => (
              <button 
                key={exp.id} 
                className={`mission-nav-btn ${index === activeExpIndex ? 'active' : ''}`}
                onClick={() => handleMissionChange(index)}
              >
                <div className="mission-nav-content">
                  <span className="mission-log-id">[{exp.logId}]</span>
                  <span className="mission-nav-role">{exp.role}</span>
                  <span className="mission-nav-company">@ {exp.company}</span>
                </div>

              
                {index === activeExpIndex && (
                  <div className="audio-visualizer">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </aside>

        <main className="mission-briefing-panel">
          <div className="hud-screen">
            
           
            {isDecrypting && (
              <div className="decryption-overlay">
                <div className="spinner"></div>
                <p>{current.decryptMsg}</p>
              </div>
            )}

            <div className={`hud-content-wrapper ${isDecrypting ? 'glitching' : ''}`}>
              <div className="card-scanline briefing-scanline"></div>
              
              <div className="briefing-top-bar">
                <div className="status-box">
                  <span className="status-label">{current.statusLabel}</span> 
                  <span className={`status-highlight ${activeExp.status === 'EM CURSO' || activeExp.status === 'ONGOING' ? 'pulse-text' : ''}`}>
                    {activeExp.status}
                  </span>
                </div>
                <div className="tech-coords">
                  <span>DATA: {activeExp.period}</span>
                  <span>LOC: {activeExp.coords}</span>
                </div>
              </div>

              <div className="briefing-main-info">
                <h3 className="briefing-role">{activeExp.role}</h3>
                <h4 className="briefing-company">TARGET // {activeExp.company}</h4>
              </div>
              
              <div className="cyber-crosshair-divider"></div>

              <p className="briefing-desc">{activeExp.desc}</p>
              
              <div className="project-techs hud-techs">
                {activeExp.tech.map((t, index) => (
                  <span key={index} className="tech-badge hex-badge">{t}</span>
                ))}
              </div>
            </div>

            {/* Elementos Decorativos da Tela */}
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>
          </div>
        </main>

      </div>
    </div>
  );
}

export default Experiencia;