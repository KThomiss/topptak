import React from "react";

function Services() {
  return (
    <div className="services-container">
      <div className="container-left">
        <div className="services-img1 services"></div>
        <div className="services-img2 services"></div>
        <div className="services-img3 services"></div>
        <div className="services-img4 services"></div>
      </div>
      <div className="container-right">
        <h2 className="h2">Et nytt prosjekt på gang? Vi i Topp Tak kan hjelpe deg.</h2>
        <p className="container-right-text">
          Vi kan tilby et bredt utvalg av varer og utførelser. Alt innen tradisjonelt blikkenslager håndverk. Vi hos Topp Tak ønsker at kunden får akkurat det den er ute etter.
        </p>
        <ul className="services-ul">
          <li>Takrenner og nedløp</li>
          <li>Båndtekking</li>
          <li>Takplater</li>
          <li>Asfalt tak belegg</li>
          <li>PVC membran</li>
          <li>Taksikring</li>
          <li>Sedum og vedligehold av sedum</li>
        </ul>
        <p className="container-right-text">
          Vi har dyktige samarbeidspartnere om jobben skulle inneholde flere fagområder. Her kan vi skreddersy et tilbud til deg som inneholder alle faser av prosjektet fra A-Å. Vi satser på
          leverandører som leverer gode kvalitetsprodukter. Dette gir trygghet til deg som kunde og til oss som utførende.
        </p>
        <p className="container-right-text h2">
          Ta kontakt for en <span>uforpliktende prat</span>, vi hjelper deg mer enn gjerne.
        </p>
      </div>
    </div>
  );
}

export default Services;
