import React from "react";
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
                                ECmoney
                            </h6>
                            <p className="footer-text">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Quam amet pariatur odio magni
                                eaque accusantium quisquam cum aut dolores
                                delectus fuga ut cupiditate, voluptatibus
                                veritatis ullam molestias rem repellendus vel!
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-white fs-4">
                                Páginas
                            </h6>
                            <p>
                                <a href="#!" className="footer-link">
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="footer-link">
                                    Sobre
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="footer-link">
                                    Metodologia
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-white fs-4">
                                Serviços
                            </h6>
                            <p>
                                <a href="#!" className="footer-link">
                                    Startup
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="footer-link">
                                    Empresas tradicionais
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="footer-link">
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
                                Rua Aires Martins Torres, 771<br /> Vila São Francisco, São Paulo
                            </p>
                            <p className="footer-contact">
                                CEP 05352-060
                            </p>
                            <p className="footer-contact">ecmoneybr@gmail.com</p>
                            <p className="footer-contact">+55 11 99144-8808</p>
                            <p className="footer-contact">+55 11 96444-7352</p>
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
