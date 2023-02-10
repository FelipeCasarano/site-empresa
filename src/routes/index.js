import { Routes, Route } from "react-router-dom";
import Home from "../../src/pages/Home";
import Sobre from "../../src/pages/Sobre";
import ServicesA from "../../src/pages/ServicesA";
import ServicesB from "../../src/pages/ServicesB";
import ServicesC from "../../src/pages/ServicesC";
import Metodologia from "../../src/pages/Metodologia";
import Contact from "../../src/pages/Contact";
import PrivacyTerms from "../../src/pages/PrivacyTerms";


export default function Rotas() {
    return (
        <Routes>
            <Route path={"*"} element={<Home />} />
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/sobre"} element={<Sobre />} />
            <Route path={"/para-startups"} element={<ServicesA />} />
            <Route path={"/para-empresas-tradicionais"} element={<ServicesB />} />
            <Route path={"/para-abertura-de-empresas"} element={<ServicesC />} />
            <Route path={"/metodologia"} element={<Metodologia />} />
            <Route path={"/entre-em-contato"} element={<Contact />} />
            <Route path={"/entre-em-contato/termos-de-privacidade"} element={<PrivacyTerms />} />

        </Routes>
    );
}
