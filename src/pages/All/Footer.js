import React from "react";
import { FaPhoneAlt, FaHome, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,

} from "mdb-react-ui-kit";

export const Footer = () => {
    return (
        <MDBFooter
            bgColor="#121212"
            className="text-center text-lg-start text-muted"
        >
            <section className="footer">
                <MDBContainer className="text-center text-md-start mt-5">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-white fs-4">
                                E.C.money
                            </h6>
                            <p className="footer-text">
                                A E.C.Money é uma empresa de Assessoria Financeira & Tecnologia Empresarial
                                que atende empresas, com o propósito compartilhado de alavancar e obter
                                resultados surpreendentes superando a concorrência, utilizando o “know-how”
                                obtido ao logo dos anos, a criatividade, tecnologia, e direcionando seus
                                recursos de forma eficiente e qualitativa para sua empresa.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-white fs-4">
                                Páginas
                            </h6>
                            <p>
                                <a href="/" className="footer-link">
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href="/sobre" className="footer-link">
                                    Sobre
                                </a>
                            </p>
                            <p>
                                <a href="/metodologia" className="footer-link">
                                    Metodologia
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-white fs-4">
                                Serviços
                            </h6>
                            <p>
                                <a href="/para-startups" className="footer-link">
                                    Startup
                                </a>
                            </p>
                            <p>
                                <a href="/para-empresas-tradicionais" className="footer-link">
                                    Empresas tradicionais
                                </a>
                            </p>
                            <p>
                                <a href="/para-abertura-de-empresas" className="footer-link">
                                    Abertura de Empresas
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol
                            md="4"
                            lg="3"
                            xl="3"
                            className="mx-auto mb-md-0 mb-4"
                        >
                            <h6 className="text-uppercase fw-bold mb-4 text-white fs-4">
                                Contato
                            </h6>
                            <p className="footer-contact">
                                <FaHome size={25} alt="local" className="icon" /> Rua Aires Martins Torres, 771 <br /> &emsp;&ensp; Vila São Francisco, São Paulo
                            </p>
                            <p className="footer-contact">
                                <FaMapMarkerAlt size={20} alt="map" className="icon" /> CEP 05352-060
                            </p>
                            <p className="footer-contact"><FaEnvelope size={20} alt="Envelope" className="icon" /> ecmoneybr@gmail.com</p>
                            <p className="footer-contact"><FaPhoneAlt size={20} alt="phone" className="icon" /> + 55 11 99144-8808</p>
                            <p className="footer-contact"><FaPhoneAlt size={20} alt="phone" className="icon" /> + 55 11 96444-7352</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div
                className="text-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                &#169;{new Date().getFullYear()} Copyright: ECmoney | All rights
                reserved
            </div>
        </MDBFooter>
    );
};
