import { NavBar } from "../All/NavBar";
import { Footer } from "../All/Footer";
import { SevicesCBanner } from "./components/SevicesCBanner";
import { Projects } from "./components/Projects";
import { Benefits } from "./components/Benefits";
import "./ServicesC.css";

function ServicesC() {
  return (
    <div className="ServicesC" id="startup">
      <NavBar />
      <SevicesCBanner />
      <Projects />
      <Benefits />
      <Footer />
    </div>
  );
}

export default ServicesC;
