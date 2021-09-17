import React from "react";
import "./NavBarTv.css";

function NavBarTv() {
  return (
    <div className="nav">
      <h2 onClick={() => window.scroll(0, 0)} style={{ cursor: "pointer" }}>
        MOVIE RATED
      </h2>
    </div>
  );
}

export default NavBarTv;
