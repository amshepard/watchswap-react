import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function WatchNewForm(props) {
  let navigate = useNavigate();
  const [submitError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [watch, setWatch] = useState({
    brand: "",
    model: "",
    year: "",
    condition: "",
    price: "",
  });

  const addWatch = (newWatch) => {
    axios
      .post(`${API}/watches`, newWatch)
      .then(
        (response) => {
          navigate(`/watches`);
          setError(false);
        },
        (error) => {
          console.error(error);
          setError(true);
          setErrorMessage(error);
        }
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setWatch({ ...watch, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addWatch(watch);
  };

  return (
    <div className="New">
      {submitError ? <h2>There was an error: {errorMessage.message}</h2> : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          value={watch.brand}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="model">Model:</label>
        <input
          id="model"
          type="text"
          value={watch.model}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={watch.year}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="condition">Condition:</label>
        <input
          id="condition"
          type="text"
          name="condition"
          value={watch.condition}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          name="price"
          value={watch.price}
          onChange={handleTextChange}
          required
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default WatchNewForm;
