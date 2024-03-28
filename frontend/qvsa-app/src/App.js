import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, ContactUs, Events, Home, Team, AdminPanel } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/events" element={<Events />} />
          <Route path="/meet-the-team" element={<Team />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
