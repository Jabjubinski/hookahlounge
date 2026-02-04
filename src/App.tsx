import { ReactLenis } from "lenis/react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { Navigation } from "./components/Navigation";
import { Contact } from "./components/Contact";
import ScrollToTop from "./components/ScrollTop";

export default function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Contact />
      </BrowserRouter>
    </ReactLenis>
  );
}
