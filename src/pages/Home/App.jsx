import "../../styles/App.scss";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Main from "./main";
import NotFound from "./NotFound";
import Logement from "./logement";

function App() {
  const [data, setData] = useState([]); // ce hook est une valeur d'état, je peux initialiser une fonction pour mettre a jour cette valeur

  useEffect(() => {
    // ce hook permet d'écouter des event, recuper des données et mettre a jour le dom
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fichier JSON chargé:", data);
        setData(data);
      })
      .catch((error) =>
        console.error("Erreur lors du chargement du fichier JSON:", error)
      );
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main data={data} />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement data={data} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
