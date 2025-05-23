import "./default-footer.styles.css";
import React from "react";

export const DefaultFooter: React.FC = () => {



  return (
   
    <footer className="defaultFooterMain">
      <div className="firstdivfooter">
        <a href="https://www.valvesoftware.com/en/about">
          <img
            className="footerImg"
            src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"
          />
        </a>
          <img
            className="footerImg"
            src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png"
          />
     
      </div>
      <div className="seconddivfooter">
        Dota и логотип Dota являются товарными знаками и/или зарегистрированными
        товарными знаками Valve Corporation. 2025 Valve Corporation, все права
        защищены.
      </div>
    </footer>
  );
};
