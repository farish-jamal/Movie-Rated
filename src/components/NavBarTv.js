import React from "react";
import "./NavBarTv.css";
import logo from '../assest/Main Logo.png'

function NavBarTv() {
  return (
    <div className="nav">
      <div onClick={() => window.scroll(0, 0)} style={{ cursor: "pointer" }}>
        <img style={{width: '160px'}} src={logo} alt="" />
      </div>
    </div>
  );
}

export default NavBarTv;
