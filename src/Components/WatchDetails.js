import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function WatchDetails() {
  const [watch, setWatch] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/watches/${id}`)
      .then((response) => {
        setWatch(response.data);
      })
      .catch((error) => {
        console.error("Error fetching watch data:", error);
        navigate("/not-found");
      });
  }, [id, navigate, API]);

  const handleDeleteWatch = () => {
    axios
      .delete(`${API}/watches/${id}`)
      .then(() => {
        navigate(`/watches`);
      })
      .catch((error) => {
        console.error("Error deleting watch:", error);
      });
  };

  return (
    <>
      <article className="container Watch-Details">
        <h5>{watch.brand}</h5>
        <h6>
          <span>Model: </span>
          {watch.model}
        </h6>
        <h6>
          <span>Year: </span>
          {watch.year}
        </h6>
        <h6>
          <span>Condition: </span>
          {watch.condition}
        </h6>
        <h6>
          <span>Price: </span>
          {watch.price}
        </h6>
      </article>
      <div className="showNavigation">
        <div>
          <button>
            <Link to={`/watches`}>Back</Link>
          </button>
        </div>

        <div>
          <button>
            <Link to={`/watches/${id}/edit`}>Edit</Link>
          </button>
        </div>
        <div>
          <button onClick={handleDeleteWatch}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default WatchDetails;
