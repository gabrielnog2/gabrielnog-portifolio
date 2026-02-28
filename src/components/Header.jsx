import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header-wrapper">
      <div className="gotg-master-container">
        
       
        <div className="gotg-logo-outer">
          <div className="gotg-logo-inner">
            <span className="gotg-text-top">DEV</span>
            <span className="gotg-text-bottom">PORTIFOLIO</span>
          </div>
        </div>

        
        <div className="gotg-vol-outer">
          <div className="gotg-vol-inner">
            VOL. 2026
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;