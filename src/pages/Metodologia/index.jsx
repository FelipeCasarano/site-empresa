import { NavBar } from "../All/NavBar";
import { Footer } from "../All/Footer";
import { MetodologiaBanner } from "./components/MetodologiaBanner";
import { FStep } from "./components/FStep";
import { SStep } from "./components/SStep";
import { TStep } from "./components/TStep";
import { FoStep } from "./components/FoStep";
import "./Metodologia.css";

function Metodologia() {
  return (
    <div className="Metodologia" id="Metodologia">
      <NavBar />
      <MetodologiaBanner />
      <FStep />
      <SStep />
      <TStep />
      <FoStep />
      <Footer />
    </div>
  );
}

export default Metodologia;
