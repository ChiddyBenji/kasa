import React from "react";
import island from "../../assets/island.png"; // Image par défaut

function Banner({ title, image }) {
  return (
    <div className="content-island">
      <div className="island-card">
        <img src={image || island} alt="Île" className="island" />
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Banner;
