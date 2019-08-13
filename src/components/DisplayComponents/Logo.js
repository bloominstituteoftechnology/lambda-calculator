import React from "react";

import logo from "../../Img/Lambda_Logo_white.png";

const Logo = ({ style }) => {
  return (
    <div className="logo-container" style={style}>
      <img className="logo" src={logo} alt="Lambda's logo" />
    </div>
  );
};

export default Logo;