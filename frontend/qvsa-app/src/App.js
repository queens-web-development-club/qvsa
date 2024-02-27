import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, ContactUs, Events, Home, Team } from "./pages";

function App() {
  return (
    <Router>
      <div>
        <h1 className="text-3xl font-bold underline">Test</h1>{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/meet-the-team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
