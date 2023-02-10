import { NavBar } from "../All/NavBar";
import { Footer } from "../All/Footer";
import { SevicesBBanner } from "./components/SevicesBBanner";
import { Projects } from "./components/Projects";
import { Benefits } from "./components/Benefits";
import { Helmet } from "react-helmet-async";
import "./ServicesB.css";

function ServicesB() {
  return (
    <div className="ServicesB" id="startup">
      <Helmet>
        <title>O que é uma assessoria para empresas? E.C.Money</title>
        <meta
          name="description"
          content="Ter uma empresa de sucesso não é apenas ter um modelo de negócio promissor, mas uma ampla quantidade de fatores, que exigem desde pequenas alterações a grandes mudanças."
        />
        <link rel="canonical" href="/para-empresas-tradicionais" />
      </Helmet>
      <NavBar />
      <SevicesBBanner />
      <Projects />
      <Benefits />
      <Footer />
    </div>
  );
}

export default ServicesB;
