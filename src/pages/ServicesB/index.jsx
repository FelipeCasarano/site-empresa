import { NavBar } from "../All/NavBar";
import { Footer } from "../All/Footer";
import { SevicesBBanner } from "./components/SevicesBBanner";
import { Projects } from "./components/Projects";
import { Benefits } from "./components/Benefits";
import "./ServicesB.css";

function ServicesB() {
  return (
    <div className="ServicesB" id="startup">
      <NavBar />
      <SevicesBBanner />
      <Projects />
      <Benefits />
      <Footer />
    </div>
  );
}

export default ServicesB;
