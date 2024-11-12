import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/NavBar";
import HomePage from "./pages/about/HomePage";
import About from "./pages/about/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add additional routes here as needed */}
        <Route path="/colleges" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
