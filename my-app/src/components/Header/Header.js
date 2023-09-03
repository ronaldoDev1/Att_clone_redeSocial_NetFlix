import React from "react";
import "./Header.css";

export default () => {
  return (
    <header className="header--black">
      <div className="header--logo">
        <a href="/">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="NetFlix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt="usuário"
          />
        </a>
      </div>
    </header>
  );
};
