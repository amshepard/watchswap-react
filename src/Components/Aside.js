import React from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <aside>
      <Link to="/watches">View All Watches</Link>
    </aside>
  );
}
