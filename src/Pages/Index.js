import Watches from "../Components/Watches";
import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <div className="Index">
        <h2>Index</h2>
        <button>
          <Link to="/watches/new">New Watch</Link>
        </button>
      </div>
      <Watches />
    </>
  );
}

export default Index;
