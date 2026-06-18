import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Journal from "./components/Journal";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import PaintingDetail from "./components/PaintingDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Work />
            <Journal />
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<PaintingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;