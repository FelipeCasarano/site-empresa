import React from "react";
import Img4 from "../../../assets/img/grupo.png";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsGearWideConnected } from "react-icons/bs";

export const Info = () => {
    return (
        <section className="info" id="info">
            <h2>
                Temos experiência em trazer resultados <br /> para sua empresa!
            </h2>
            <div className="container info-container">
                <div className="info-company">
                    <div className="info-company-image">
                        <img src={Img4} alt="Equipe imagem" />
                    </div>
                </div>
                <div className="info-content">
                    <div className="info-cards">
                        <article className="info-card">
                            <FaAward className="info-icon" />
                            <h5>Experiência</h5>
                            <small>
                                Mais de 10 anos solucionando dificuldades
                                empresariais!
                            </small>
                        </article>

                        <article className="info-card">
                            <FiUser className="info-icon" />
                            <h5>Clientes</h5>
                            <small>
                                Ideal para pequenas e médias empresas.
                            </small>
                        </article>

                        <article className="info-card">
                            <VscFolderLibrary className="info-icon" />
                            <h5>Custo-benefício</h5>
                            <small>
                                Desenvolvendo uma solução personalizada para seu
                                negócio por um valor justo.
                            </small>
                        </article>

                        <article className="info-card">
                            <BsGearWideConnected className="info-icon" />
                            <h5>Tecnologia</h5>
                            <small>
                                Utilizando o que é de mais moderno para criar a
                                sua interface Web.
                            </small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla aliquid pariatur nemo itaque hic, laudantium
                        consectetur amet qui quod debitis labore praesentium,
                        dicta ex natus tempora fuga voluptate. Iste, tempore.
                    </p>
                    <a href="#contact" className="info-btn">
                        Faça seu orçamento
                    </a>
                </div>
            </div>
        </section>
    );
};
