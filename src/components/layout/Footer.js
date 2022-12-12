import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../images/logo/facebook.png";
import instagram from "../../images/logo/instagram.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-row1">
        <div>
          <h4 className="h4">Ring oss</h4>
          <p className="info-footer">+47 936 27 836</p>
          <p className="info-footer">+47 911 52 746</p>
          <p className="info-footer">Post@ToppTak.no</p>
        </div>
        <div>
          <h4 className="h4">Besøk oss</h4>
          <p className="info-footer">Topp Tak AS, Pauliveien 1</p>
          <p className="info-footer">3185 Skoppum</p>
          <p className="info-footer">Org: 827 245 542</p>
        </div>
        <div>
          <h4 className="h4">Følg oss</h4>
          <Link to={{ pathname: "https://www.facebook.com/topptak/" }} target="_blank">
            <img src={facebook} className="footer-social-img" alt="facebook logo"></img>
          </Link>
          <Link to={{ pathname: "https://www.instagram.com/topptak/" }}>
            <img src={instagram} className="footer-social-img" alt="instagram logo"></img>
          </Link>
        </div>
      </div>
      <div className="footer-row2">
        <div className="footer-bg-topptak"></div>
        <div className="footer-bg-profftak"></div>
      </div>
      <div className="footer-row3">Copyright © Med enerett</div>
    </div>
  );
}

export default Footer;
