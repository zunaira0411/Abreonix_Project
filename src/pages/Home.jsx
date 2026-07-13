import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Features from "../components/home/Features";
import Stats from "../components/home/Stats";
import CTA from "../components/home/CTA";

import "../styles/home.css";

function Home() {
  return (
    <div className="home-page">

      <Navbar />

      <Hero />

      <About />

      <Features />

      <Stats />

      <CTA />

    </div>
  );
}

export default Home;