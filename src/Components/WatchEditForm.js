import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function WatchEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [watch, setWatch] = useState({
    brand: "",
    model: "",
    year: "",
    condition: "",
    price: "",
  });

  const handleTextChange = (event) => {
    setWatch({ ...watch, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/watches/${id}`)
      .then(
        (response) => {
          setWatch(response.data);
        },
        (err) => {
          console.error(err);
          navigate(`/not-found`);
        }
      )
      .catch((c) => console.warn("catch", c));
  }, [id, API, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateWatch(watch);
  };

  const updateWatch = (updatedWatch) => {
    axios
      .put(`${API}/watches/${id}`, updatedWatch)
      .then(
        () => {
          navigate(`/watches/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          value={watch.brand}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="model">Model:</label>
        <input
          id="model"
          type="text"
          value={watch.model}
          onChange={handleTextChange}
        />
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={watch.year}
          onChange={handleTextChange}
        />
        <label htmlFor="condition">Condition:</label>
        <input
          id="condition"
          type="text"
          name="condition"
          value={watch.condition}
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          name="price"
          value={watch.price}
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default WatchEditForm;
