import { NavBar } from "../All/NavBar";
import { Footer } from "../All/Footer";
import { SevicesCBanner } from "./components/SevicesCBanner";
import { Projects } from "./components/Projects";
import { Benefits } from "./components/Benefits";
import { Helmet } from "react-helmet-async";
import "./ServicesC.css";

function ServicesC() {
  return (
    <div className="ServicesC" id="startup">
      <Helmet>
        <title>O que é uma assessoria para abertura de empresas? E.C.Money</title>
        <meta
          name="description"
          content="Abrir um negócio depende não só de uma boa ideia, mas de um acompanhamento de várias partes, esse procedimento é bem burocrático e envolve várias decisões que afetarão o futuro do negócio, incluindo direitos, obrigações e estratégias."
        />
        <link
          rel="canonical"
          href="https://www.ecmoney.com.br/para-abertura-de-empresas"
        />
      </Helmet>
      <NavBar />
      <SevicesCBanner />
      <Projects />
      <Benefits />
      <Footer />
    </div>
  );
}

export default ServicesC;
