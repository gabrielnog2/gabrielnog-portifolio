
import "./Controls.css";

function Controls({ next, prev, play, stop }) {
  return (
    <div className="controls-container">
      <button className="metal-btn" onClick={prev}>
        <div className="btn-cap"></div>
        <span className="btn-label">REV</span>
      </button>

      <button className="metal-btn play-btn" onClick={play}>
        <div className="btn-cap"></div>
        <span className="btn-label">PLAY</span>
      </button>

      <button className="metal-btn" onClick={next}>
        <div className="btn-cap"></div>
        <span className="btn-label">FWD</span>
      </button>
      
      
      <button className="metal-btn stop-btn" onClick={stop}>
        <div className="btn-cap"></div>
        <span className="btn-label">STOP</span>
      </button>
    </div>
  );
}


export default Controls;