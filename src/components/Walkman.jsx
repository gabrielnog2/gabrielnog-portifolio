import Controls from "./Controls";
import "./Walkman.css";


function Walkman({ title, content, next, prev, isPlaying = true }) {
  const displayTitle = title ? title.replace("Track 0", "").trim() : "AWESOME MIX VOL. 1";

  return (
    
    <div className="viewport">
        
      <div className="hot-line-btn-top"></div>

      <main className="walkman-case-sony">
        <div className="silver-panel-left">
          <div className="side-button-group">
            <div className="side-button vol-slider"></div>
            <div className="side-button tone-switch"></div>
          </div>
        </div>

        <div className="main-blue-body">
          <header className="sony-branding">
            <span className="logo-text">SONY</span>
            <span className="model-text">STEREO CASSETTE PLAYER TPS-L2</span>
          </header>

          <div className="cassette-door">
            <div className="glass-window">
              
              <svg viewBox="0 0 400 256" className="cassette-svg">
                <defs>
                  <filter id="plasticRoughness">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                    <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="1">
                      <feDistantLight azimuth="45" elevation="60" />
                    </feDiffuseLighting>
                    <feComposite operator="in" in2="SourceGraphic"/>
                  </filter>

                  <filter id="paperTexture">
                     <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise"/>
                     <feDiffuseLighting in="noise" lightingColor="#fdf5ca" surfaceScale="2">
                       <feDistantLight azimuth="45" elevation="60"/>
                     </feDiffuseLighting>
                     <feComposite operator="in" in2="SourceGraphic" result="texture"/>
                     <feBlend in="SourceGraphic" in2="texture" mode="multiply"/>
                   </filter>

                  <linearGradient id="darkPlasticBody" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2a2b2e" />
                    <stop offset="20%" stopColor="#111214" />
                    <stop offset="50%" stopColor="#0a0a0a" />
                    <stop offset="80%" stopColor="#1a1b1d" />
                    <stop offset="100%" stopColor="#050505" />
                  </linearGradient>

                  <linearGradient id="plasticHighlight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="10%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="90%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                  </linearGradient>

                  <linearGradient id="awesomeMixGradReal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fdf5ca" />
                    <stop offset="30%" stopColor="#fdf5ca" />
                    <stop offset="35%" stopColor="#f0a535" />
                    <stop offset="40%" stopColor="#d98e26" />
                    <stop offset="45%" stopColor="#fdf5ca" />
                    <stop offset="50%" stopColor="#fdf5ca" />
                    <stop offset="55%" stopColor="#f0a535" />
                    <stop offset="60%" stopColor="#d98e26" />
                    <stop offset="65%" stopColor="#e94e31" />
                    <stop offset="85%" stopColor="#c0351a" />
                    <stop offset="100%" stopColor="#8a1010" />
                  </linearGradient>

                  <radialGradient id="turnedMetal" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="40%" stopColor="#d0d0d0" />
                    <stop offset="80%" stopColor="#707070" />
                    <stop offset="100%" stopColor="#303030" />
                  </radialGradient>

                  <linearGradient id="tapeSheen" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>

                <rect x="5" y="5" width="390" height="246" rx="12" fill="url(#darkPlasticBody)" filter="url(#plasticRoughness)" opacity="0.9" />
                <rect x="5" y="5" width="390" height="246" rx="12" fill="url(#plasticHighlight)" stroke="#000" strokeWidth="2" />
                
                <path d="M 15 20 H 385 V 160 H 15 V 20 Z" fill="none" stroke="#000" strokeWidth="1" opacity="0.5" />

                <g filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.6))">
                  <rect x="30" y="20" width="340" height="130" rx="4" fill="url(#awesomeMixGradReal)" filter="url(#paperTexture)" />
                </g>
                
                <text x="200" y="62" textAnchor="middle" className="itc-machine-title">
                  {displayTitle}
                </text>

                <rect x="95" y="70" width="210" height="70" rx="5" fill="#010101" stroke="#1a1a1a" strokeWidth="1" />
                
                <path d="M 95 70 L 305 70 L 305 140 L 95 140 Z" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="4" />

                <rect x="120" y="112" width="160" height="30" rx="2" fill="#0f0f0f" />
                <rect x="130" y="118" width="140" height="18" fill="#2c1e16" stroke="#1a110c" strokeWidth="1"/>

                <path 
                  d="M 112 110 C 112 110, 120 122, 280 122 C 280 122, 288 110, 288 110" 
                  fill="none" stroke="#3d291f" strokeWidth="8" strokeLinecap="round" 
                />
                <path 
                  d="M 112 110 C 112 110, 120 122, 280 122 C 280 122, 288 110, 288 110" 
                  fill="none" stroke="url(#tapeSheen)" strokeWidth="4" strokeLinecap="round"
                  className={isPlaying ? "tape-sheen-moving" : ""}
                />

                <circle cx="115" cy="125" r="6" fill="url(#turnedMetal)" stroke="#111" strokeWidth="1"/>
                <circle cx="285" cy="125" r="6" fill="url(#turnedMetal)" stroke="#111" strokeWidth="1"/>

                <g className={isPlaying ? "spinning-realistic" : ""} style={{ transformOrigin: '140px 105px' }}>
                  <circle cx="140" cy="105" r="29" fill="#2a1b12" stroke="#0a0604" strokeWidth="1.5" />
                  <circle cx="140" cy="105" r="14.5" fill="#e0e0e0" stroke="#ccc" strokeWidth="1" />
                  <path d="M140 90 L140 120 M125 105 L155 105 M129 94 L151 116 M129 116 L151 94" stroke="#222" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="140" cy="105" r="4.5" fill="url(#turnedMetal)" stroke="#000" strokeWidth="1" />
                </g>

                <g className={isPlaying ? "spinning-realistic" : ""} style={{ transformOrigin: '260px 105px' }}>
                  <circle cx="260" cy="105" r="22" fill="#2a1b12" stroke="#0a0604" strokeWidth="1.5" />
                  <circle cx="260" cy="105" r="14.5" fill="#e0e0e0" stroke="#ccc" strokeWidth="1" />
                  <path d="M260 90 L260 120 M245 105 L275 105 M249 94 L271 116 M249 116 L271 94" stroke="#222" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="260" cy="105" r="4.5" fill="url(#turnedMetal)" stroke="#000" strokeWidth="1" />
                </g>

                <g>
                  <circle cx="20" cy="20" r="5.5" fill="url(#turnedMetal)" stroke="#222" strokeWidth="0.5" />
                  <path d="M16.5 16.5 L23.5 23.5" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                  
                  <circle cx="380" cy="20" r="5.5" fill="url(#turnedMetal)" stroke="#222" strokeWidth="0.5" />
                  <path d="M376.5 23.5 L383.5 16.5" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                  
                  <circle cx="20" cy="236" r="5.5" fill="url(#turnedMetal)" stroke="#222" strokeWidth="0.5" />
                  <path d="M16.5 239.5 L23.5 232.5" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                  
                  <circle cx="380" cy="236" r="5.5" fill="url(#turnedMetal)" stroke="#222" strokeWidth="0.5" />
                  <path d="M376.5 232.5 L383.5 239.5" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              </svg>

              <div className="description-content-area">
                <div className="lcd-screen-effect">
                  {content}
                </div>
              </div>
            </div>
          </div>

          <div className="controls-wrapper-realistic">
            <Controls next={next} prev={prev} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Walkman;