import React from 'react';
import blackLogo from '../../assets/logo-black.png'; 

function Footer({title}) {
  return (
    <div className="content-footer">
        <div className="content-logo-footer">
          <img src={blackLogo} alt="blackLogo" className="Blacklogo" />
        </div>
        <div className="content-txt-footer">
          <p>{title}</p>
        </div>
    </div>
  );
}

export default Footer;