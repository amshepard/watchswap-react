import axios from "axios";
import { useState, useEffect } from "react";
import Watch from "./Watch"; 

const API = process.env.REACT_APP_API_URL;

function Watches() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/watches`)
      .then(
        (response) => {
          setWatches(response.data);
        },
        (err) => console.error(err)
      )
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div>
      <section>
        <table className="Watches">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>Year</th>
              <th>Condition</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {watches.map((watch) => {
              return <Watch key={watch.id} watch={watch} id={watch.id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Watches;
