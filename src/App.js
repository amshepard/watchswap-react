import logo from './logo-white.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavSidebar from "./Components/NavSideBar";
import WatchDetails from "./Components/WatchDetails";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <header>
          <img src={logo} alt="Logo" />
        </header>
        <NavSidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watches" element={<Index />} />
            <Route path="/watches/new" element={<New />} />
            <Route path="/watches/:id" element={<Show />} />
            <Route path="/watches/:id" element={<WatchDetails />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
