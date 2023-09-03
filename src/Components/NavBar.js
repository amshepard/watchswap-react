import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <NavLink to="/watches">View & Swap</NavLink>
      </h1>
    </nav>
  );
}
