import React from "react";
import Img4 from "../../../assets/img/grupo.webp";
import { Row, Col } from "react-bootstrap";
import { FaAward, FaStore, FaRocket, FaHammer } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsGearWideConnected } from "react-icons/bs";
import { IoRestaurant } from "react-icons/io5";

export const Info = () => {
  return (
    <section className="info" id="info">
      <h2>
        Temos experiência em trazer resultados <br /> para sua empresa!
      </h2>
      <article className="info-card-p">
        <h3>Clientes/Atuação </h3>
        <small>Atuamos em vários segmentos, sendo os principais:</small>
        <Row className="aligh-items-center">
          <Col xs={6} md={3} xl={3}>
            <IoRestaurant className="info-icon-p" />
            <li>Bares, Buffets e Restaurantes de alta gastronomia.</li>
          </Col>
          <Col xs={6} md={3} xl={3}>
            <FaHammer className="info-icon-p" />
            <li>Construtoras e Incorporadoras.</li>
          </Col>
          <Col xs={6} md={3} xl={3}>
            <FaStore className="info-icon-p" />
            <li>Lojas, Comércios e E-Commerces.</li>
          </Col>
          <Col xs={6} md={3} xl={3}>
            <FaRocket className="info-icon-p" />
            <li>Pequenas e médias empresas digitais.</li>
          </Col>
        </Row>
      </article>
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
              <small>Mais de 10 anos solucionando dificuldades empresariais!</small>
            </article>

            <article className="info-card">
              <FiUser className="info-icon" />
              <h5>Parceiros</h5>
              <small>
                Bancos e instituições financeiras, advogados, adm/contadores e técnicos de
                TI.
              </small>
            </article>

            <article className="info-card">
              <VscFolderLibrary className="info-icon" />
              <h5>Custo-benefício</h5>
              <small>
                Desenvolvendo uma solução personalizada para seu negócio por um valor
                justo.
              </small>
            </article>

            <article className="info-card">
              <BsGearWideConnected className="info-icon" />
              <h5>Tecnologia</h5>
              <small>
                Utilizando o que é de mais moderno para criar a sua interface Web.
              </small>
            </article>
          </div>

          <a href="/entre-em-contato" className="info-btn">
            Faça seu orçamento
          </a>
        </div>
      </div>
    </section>
  );
};
