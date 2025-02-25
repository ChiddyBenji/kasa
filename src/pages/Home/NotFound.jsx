import { Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';


 function NotFound() {
  return (
    <div className="content-NotFound">
      <Header></Header>
      <div className="content-404">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </div>
      <Link to="/" className="return">Retourner sur la page d’accueil</Link>
      <Footer title="© 2020 Kasa. All rights reserved"></Footer>
    </div>
  );
}

export default NotFound;