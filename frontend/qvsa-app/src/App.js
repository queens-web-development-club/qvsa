import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, ContactUs, Events, Home, Team, AdminPanel } from "./pages";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
