import React from "react";

function Comments() {
  return (
    <div className="info-container-bg">
      <div className="info-container comments">
        <div className="icons-container">
          <div className="icons-quote icons-img"></div>
          <p className="info-title comments-title">Serviceinnstilt</p>
          <p className="info-text">"Flott levert av Topp Tak"</p>
          <p className="info-text quote-name">- Eline</p>
        </div>
        <div className="icons-container">
          <div className="icons-quote icons-img"></div>
          <p className="info-title comments-title">Gode Løsninger</p>
          <p className="info-text">"De fant gode løsninger på taket vårt. Flott samarbeid"</p>
          <p className="info-text quote-name">- Tine</p>
        </div>
        <div className="icons-container">
          <div className="icons-quote icons-img"></div>
          <p className="info-title comments-title">Tusen Takk</p>
          <p className="info-text">"Håndverkeren jobbet i helgen for å få taket tett, da det lakk i garasjen"</p>
          <p className="info-text quote-name">- Nina</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
