import React from 'react';
import Header from './Header'; 
import Collapse from './collapse';
import mountain from '../../assets/moutain.png';
import Footer from './Footer';
import Banner from './banner'; // Importation du composant Banner

function About() {
  // Tableau contenant les données des collapses (objets)
  const collapseData = [
    { title: "Fiabilité", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Respect", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Service", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Sécurité", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ];

  return (
    <div className="content-about">
      
      <Header title=""/>
      <div className="about-container">
      <Banner image={mountain} />
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
