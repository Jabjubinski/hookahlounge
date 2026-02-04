import { ReactLenis } from "lenis/react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { Navigation } from "./components/Navigation";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
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
