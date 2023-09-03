import React from "react";
import { Link } from "react-router-dom";

export default function NavSidebar() {
  return (
    <nav>
      <Link to="/watches/new">List a New Watch</Link>
    </nav>
  );
}
