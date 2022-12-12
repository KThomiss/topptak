import React from "react";

function Cards() {
  return (
    <div className="cards-wrapper">
      <div className="card-container">
        <div className="card-bg-black">
          <h2 className="card-title">Profesjonelt team</h2>
          <p className="card-text">Vi setter fagkunnskap først.</p>
        </div>
        <div className="card-bg-red">
          <div className="team card-img"></div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-bg-black">
          <h2 className="card-title">Levering</h2>
          <p className="card-text">Vi kan levere varer direkte til deg, eller du kan hente på vårt verksted.</p>
        </div>
        <div className="card-bg-red">
          <div className="delivery card-img"></div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-bg-black">
          <h2 className="card-title">Minimum responstid</h2>
          <p className="card-text">Vi streber etter å hjelpe deg så fort vi kan.</p>
        </div>
        <div className="card-bg-red">
          <div className="responstid card-img"></div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
