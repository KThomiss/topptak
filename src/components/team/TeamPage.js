import React from "react";
import ansatt1 from "../../images/team/ansatt-1.jpg";
import ansatt2 from "../../images/team/ansatt-2.jpg";
import ansatt3 from "../../images/team/ansatt-3.jpg";
import Footer from "../layout/Footer";

function TeamPage() {
  return (
    <>
      <div className="team-page-wrapper">
        <h1 className="h1-team-page">Om oss</h1>
        <div className="team-page-container">
          <div className="team-card-container">
            <div className="card-top">
              <span className="card-img-wrapper">
                <div className="team-card-img-container">
                  <img src={ansatt1} alt="worker from Topp Tak AS" className="profile-img" />
                </div>
              </span>
            </div>
            <div className="card-bottom">
              <h2 className="team-card-title">Ansatt 1</h2>
              <div className="team-card-info">
                <p className="team-card-description">Bare litt tekst for å utfylle et eksempel for en biograf av ansatt.</p>
                <p className="team-card-phone">Telefon: 123 45 678</p>
                <p className="team-card-email">Email: person@topptak.com</p>
              </div>
            </div>
          </div>
          <div className="team-card-container">
            <div className="card-top">
              <span className="card-img-wrapper">
                <div className="team-card-img-container">
                  <img src={ansatt2} alt="worker from Topp Tak AS" className="profile-img" />
                </div>
              </span>
            </div>
            <div className="card-bottom">
              <h2 className="team-card-title">Ansatt 2</h2>
              <div className="team-card-info">
                <p className="team-card-description">
                  Bare litt tekst for å utfylle et eksempel for en biograf av ansatt. Denne personen har kanskje litt mer på hjertet og har lyst til å fortelle litt mer.
                </p>
                <p className="team-card-phone">Telefon: 123 45 678</p>
                <p className="team-card-email">Email: person@topptak.com</p>
              </div>
            </div>
          </div>
          <div className="team-card-container">
            <div className="card-top">
              <span className="card-img-wrapper">
                <div className="team-card-img-container">
                  <img src={ansatt3} alt="worker from Topp Tak AS" className="profile-img" />
                </div>
              </span>
            </div>
            <div className="card-bottom">
              <h2 className="team-card-title">Ansatt 3</h2>
              <div className="team-card-info">
                <p className="team-card-description">
                  {" "}
                  Bare litt tekst for å utfylle et eksempel for en biograf av ansatt. Denne personen har lyst til å fortelle masse om seg selv og går dypt inn på personlige ting som setter ToppTak i
                  et bedre lys.
                </p>
                <p className="team-card-phone">Telefon: 123 45 678</p>
                <p className="team-card-email">Email: person@topptak.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TeamPage;
