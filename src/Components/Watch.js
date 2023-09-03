import React from "react";
import { Link } from "react-router-dom";

function Watch({ watch, id }) {
  return (
    <tr className="Watch">
      <td>
        <Link to={`/watches/${id}`}>{watch.brand}</Link>
      </td>
      <td>
        <Link to={`/watches/${id}`}>{watch.model}</Link>
      </td>
      <td>
        <Link to={`/watches/${id}`}>{watch.year}</Link>
      </td>
      <td>
        <Link to={`/watches/${id}`}>{watch.condition}</Link>
      </td>
      <td>
        <Link to={`/watches/${id}`}>{watch.price}</Link>
      </td>
    </tr>
  );
}

export default Watch;
