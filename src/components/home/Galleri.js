import React from "react";
import { useNavigate } from "react-router-dom";

function Galleri() {
  const navigate = useNavigate();

  const navigateToGalleriPage = () => {
    navigate("/galleri");
  };
  return (
    <div className="galleri-container">
      <h3 className="h3">Galleri</h3>
      <div className="galleri-img-container">
        <div className="galleri-img galleri-img1"></div>
        <div className="galleri-img galleri-img2"></div>
        <div className="galleri-img galleri-img3"></div>
      </div>
      <button onClick={navigateToGalleriPage} className="cta cta-dark">
        Se alle
      </button>
    </div>
  );
}

export default Galleri;
