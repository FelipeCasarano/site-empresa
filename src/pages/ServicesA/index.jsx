import { NavBar } from "../All/NavBar";
import { Footer } from "../All/Footer";
import { SevicesABanner } from "./components/SevicesABanner";
import { Projects } from "./components/Projects";
import { Benefits } from "./components/Benefits";
import "./ServicesA.css";

function ServicesA() {
  return (
    <div className="ServicesA" id="startup">
      <NavBar />
      <SevicesABanner />
      <Projects />
      <Benefits />
      <Footer />
    </div>
  );
}

export default ServicesA;
