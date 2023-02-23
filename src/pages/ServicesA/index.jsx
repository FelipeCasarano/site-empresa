import { NavBar } from "../All/NavBar";
import { Footer } from "../All/Footer";
import { SevicesABanner } from "./components/SevicesABanner";
import { Projects } from "./components/Projects";
import { Benefits } from "./components/Benefits";
import { Helmet } from "react-helmet-async";
import "./ServicesA.css";

function ServicesA() {
  return (
    <div className="ServicesA" id="startup">
      <Helmet>
        <title>O que é uma assessoria para startups? E.C.Money</title>
        <meta
          name="description"
          content="Transformar uma Startup em um negócio bem-sucedido exige uma árdua jornada de trabalho, conhecimento e suporte adequado."
        />
        <link rel="canonical" href="https://www.ecmoney.com.br/para-startups" />
      </Helmet>
      <NavBar />
      <SevicesABanner />
      <Projects />
      <Benefits />
      <Footer />
    </div>
  );
}

export default ServicesA;
