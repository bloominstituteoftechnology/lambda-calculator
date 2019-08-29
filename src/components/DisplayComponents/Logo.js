import React from "react";

import logo from "../../Img/Lambda_Logo_white.png";

const Logo = () => {
  const logoStyle = {
    width: '25%',
    margin: '15px'
  }
  return (
    <div className="logo-container">
      <img className="logo" style={ logoStyle } src={logo} alt="Lambda's logo" />
    </div>
  );
};

export default Logo;
