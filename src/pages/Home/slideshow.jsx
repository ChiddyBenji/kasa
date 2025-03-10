import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import arrowleft from "../../assets/arrowleft.png";
import arrowright from "../../assets/arrowright.png";
import Collapse from "./collapse";

function SlideShow({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = data.find((item) => item.id === id);

  // Vérification si l'id est invalide
  useEffect(() => {
    if (!logement) {
      navigate("/notfound"); // Redirige vers la page NotFound si l'id est incorrect
    }
  }, [logement, navigate]);

  const images = logement?.pictures || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex >= images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!logement) return null;

  return (
    <div className="slideshow-container">
      <div className="slideshow-content">
        {/* Affichage conditionnel des boutons seulement si plus d'une image */}
        {images.length > 1 && (
          <button className="prev" onClick={prevImage}>
            <img src={arrowleft} alt="arrowleft" />
          </button>
        )}

        <img
          src={images[currentIndex]}
          alt={logement.title}
          className="logement-image"
        />

        {/* Affichage conditionnel du numéro du slide */}
        {images.length > 1 && (
          <div className="slide-number">
            {currentIndex + 1}/{images.length}
          </div>
        )}

        {images.length > 1 && (
          <button className="next" onClick={nextImage}>
            <img src={arrowright} alt="arrowright" />
          </button>
        )}
      </div>

      <div className="content-info">
        <div className="info-one">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags-container">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="info-two">
          <div className="host">
            <p>{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>
          <div className="rating">
            {Array(5)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={index < logement.rating ? "star filled" : "star"}
                >
                  ★
                </span>
              ))}
          </div>
        </div>
      </div>

      <div className="info-number">
        <div className="info-number-one">
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
        </div>
        <div className="info-number-two">
          <Collapse title="Équipements">
            <ul className="equipments-list">
              {logement.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
