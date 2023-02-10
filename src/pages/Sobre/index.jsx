import { NavBar } from "../All/NavBar";
import { Footer } from "../All/Footer";
import { SobreBanner } from "./components/SobreBanner";
import { SobreInfo } from "./components/SobreInfo";
import { SobreObj } from "./components/SobreObj";
import { SobreDados } from "./components/SobreDados";
import { SobreIdentity } from "./components/SobreIdentity";
import { SobreQuotes } from "./components/SobreQuotes";
import { Helmet } from "react-helmet-async";
import "./Sobre.css";

function Sobre() {
  return (
    <div className="Sb" id="sobre">
      <Helmet>
        <title>Sobre</title>
        <meta
          name="description"
          content="Somos um grupo de Administradores, Contadores, Desenvolvedores e Técnicos de TI, extremamente capacitados a somar força e sabedoria com o objetivo de aprimorar a gestão do seu negócio, minimizando gastos e maximizando resultados."
        />
        <link rel="canonical" href="/sobre" />
      </Helmet>
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
