import React from "react";

import logo from "../../Img/Lambda_Logo_white.png";
const logoColor = {
  color: 'white',
  backgroundColor: 'darkred'
}

const Logo = () => {
  return (
    <div className="logo-container">
      <img style={logoColor} className="logo" src={logo} alt="Lambda's logo" />
    </div>
  );
};

export default Logo;
