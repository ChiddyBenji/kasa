import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import island from '../../assets/island.png';
import Footer from './Footer';
import Banner from './banner';

function Main({ data }) {
  return (
    <div className="content-main">
      <Header />
      <Banner title="Chez vous, partout et ailleurs" image={island} />
      
      <div className="content-cards">
        {data.map((card) => (
          <Link to={`/logement/${card.id}`} key={card.id} className="card-link">
            <div className="card">
              <img src={card.cover} alt={card.title} className="card-image" />
              <h3 className="card-title">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      <Footer title="© 2020 Kasa. All rights reserved" />
    </div>
  );
}

export default Main;
