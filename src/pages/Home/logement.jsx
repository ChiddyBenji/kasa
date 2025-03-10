import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SlideShow from "./slideshow";

function Logement({ data }) {
  return (
    <div className="content-logement">
      <Header />
      <div className="logement-container">
        <SlideShow data={data} />
      </div>
      <Footer title="© 2020 Kasa. All rights reserved" />
    </div>
  );
}

export default Logement;
