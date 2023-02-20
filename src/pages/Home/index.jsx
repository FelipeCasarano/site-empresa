import "./home.css";
import "../All/all.css";
import { NavBar } from "../All/NavBar";
import { Banner } from "./components/Banner";
import { Services } from "./components/Services";
import { Why } from "./components/Why";
import { Info } from "./components/Info";
import { Footer } from "../All/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div className="Home">
      <Helmet>
        <meta
          name="description"
          content="A E.C.Money é uma empresa de Assessoria Financeira & Tecnologia Empresarial que ajuda empresas a obter resultados surpreendentes superando a concorrência, utilizando a criatividade, tecnologia e direcionando seus recursos de forma eficiente."
        />
        <link rel="canonical" href="https://www.ecmoney.com.br/" />
      </Helmet>
      <NavBar />
      <Banner />
      <Services />
      <Why />
      <Info />
      <Footer />
    </div>
  );
}

export default Home;
