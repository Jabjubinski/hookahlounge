import { About } from "./About";

import { Gallery } from "./Gallery";
import { Hero } from "./Hero";

import { Services } from "./Services";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Gallery />
    </div>
  );
};

export default Home;
