import { NavBar } from "../All/NavBar";
import { Footer } from "../All/Footer";
import { MetodologiaBanner } from "./components/MetodologiaBanner";
import { FStep } from "./components/FStep";
import { SStep } from "./components/SStep";
import { TStep } from "./components/TStep";
import { FoStep } from "./components/FoStep";
import "./Metodologia.css";
import { Helmet } from "react-helmet-async";

function Metodologia() {
  return (
    <div className="Metodologia" id="Metodologia">
      <Helmet>
        <title>Metodologia</title>
        <meta
          name="description"
          content="Identificar as premissas críticas e estabelecer as diretrizes necessárias para a elaboração correta do plano de ação."
        />
        <link rel="canonical" href="https://www.ecmoney.com.br/metodologia" />
      </Helmet>
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
