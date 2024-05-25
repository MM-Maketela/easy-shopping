import React from "react";

import LogoImg from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="header-logo">
      <Link to="http://localhost:3000" className="logo">
        <img src={LogoImg} alt="" />
      </Link>
    </div>
  );
};
