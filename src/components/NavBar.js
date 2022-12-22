import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./css/NavBar.css";

function NavBar() {
  const location = useLocation();

  const checkMenu = (splitUrl) => {
    if (splitUrl.includes("result")) {
      document
        .getElementById("ID_TITLE_RESULT_SNACK")
        .classList.add("nav-active");
    } else if (splitUrl.includes("shop")) {
      document.getElementById("ID_TITLE_PICK_SHOP").classList.add("nav-active");
    } else {
      document
        .getElementById("ID_TITLE_TODAY_SNACK")
        .classList.add("nav-active");
    }
  };

  useEffect(() => {
    const splitUrl = location.pathname.split("/");
    checkMenu(splitUrl);
  }, [location]);

  return (
    <nav>
      <div id="nav">
        <div className="nav-item">
          <NavLink to="/" className="nav-btn" id="ID_TITLE_TODAY_SNACK">
            Today Snack
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/result" className="nav-btn" id="ID_TITLE_RESULT_SNACK">
            Result Snack
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/shop" className="nav-btn" id="ID_TITLE_PICK_SHOP">
            Pick Shop
          </NavLink>
        </div>
      </div>
      <div id="nav-line" />
    </nav>
  );
}

export default NavBar;
