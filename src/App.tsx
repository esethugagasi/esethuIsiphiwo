import { Routes, Route, useLocation, HashRouter} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Journal from "./components/Journal";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import PaintingDetail from "./components/PaintingDetail";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <Navbar />
      <ScrollToSection />
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
    </HashRouter>
  );
}

export default App;