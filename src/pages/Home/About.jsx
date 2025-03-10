import React from "react";
import Header from "./Header";
import Collapse from "./collapse";
import mountain from "../../assets/moutain.png";
import Footer from "./Footer";
import Banner from "./banner"; // Importation du composant Banner

function About() {
  // Tableau contenant les données des collapses (objets)
  const collapseData = [
    {
      title: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale, les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      description:
        "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    },
    {
      title: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa, Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'ôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des atliers sur la sécurité domestique pour nos hotes.",
    },
  ];

  return (
    <div className="content-about">
      <Header title="" />
      <div className="about-container">
        <Banner image={mountain} title="" />
        {/* map me permet de parcourir chaque objet du tableau*/}
        {collapseData.map((item, index) => (
          // Key permet à react de suivre chaque élément unique donc index
          <Collapse key={index} title={item.title}>
            <p>{item.description}</p>
          </Collapse>
        ))}
      </div>
      <Footer title="© 2020 Kasa. All rights reserved"></Footer>
    </div>
  );
}

export default About;
