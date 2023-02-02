import { NavBar } from "../All/NavBar";
import { Footer } from "../All/Footer";
import { SobreBanner } from "./components/SobreBanner";
import { SobreInfo } from "./components/SobreInfo";
import { SobreObj } from "./components/SobreObj";
import { SobreDados } from "./components/SobreDados";
import { SobreIdentity } from "./components/SobreIdentity";
import { SobreQuotes } from "./components/SobreQuotes";
import "./Sobre.css";

function Sobre() {
  return (
    <div className="Sb" id="sobre">
      <NavBar />
      <SobreBanner />
      <SobreInfo />
      <SobreDados />
      <SobreObj />
      <SobreIdentity />
      <SobreQuotes />
      <Footer />
    </div>
  );
}

export default Sobre;
