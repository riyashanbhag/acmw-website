import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Board from "./components/Board";
import DotGrid from "./components/DotGrid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// (Optional: keep these if you want later pages)
// import Connect from "./components/Connect";
// import FAQ from "./components/FAQ";
// import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Router>
      <div className="bg-[#030014] min-h-screen">
        
        {/* Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <DotGrid
            dotSize={4}
            gap={25}
            baseColor="#271e37"
            activeColor="#1C90CE"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col w-full">
          <Navbar />

          <main className="pt-[100px] flex-grow">
            <Routes>
              {/* Home */}
              <Route path="/" element={<Board />} />

              {/* Dynamic team pages */}
              <Route path="/team/:year" element={<Board />} />

              {/* Current team */}
              <Route path="/team-current" element={<Board />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;