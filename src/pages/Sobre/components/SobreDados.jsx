import React from "react";

import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import { Container, Row, Col } from "react-bootstrap";

export const SobreDados = () => {
  return (
    <section className="sobre-dados">
      <Container>
        <h2>
          Temos experiência em trazer resultados <br /> para sua empresa!
        </h2>
        <Row className="aligh-items-center">
          <Col xs={4} md={4} xl={4} className="sdados-card">
            <FaAward className="sdados-icon" />
            <h5>Experiência</h5>
            <small>Mais de 10 anos solucionando dificuldades empresariais!</small>
          </Col>

          <Col xs={4} md={4} xl={4} className="sdados-card">
            <FiUser className="sdados-icon" />
            <h5>Clientes</h5>
            <small>Ideal para pequenas e médias empresas.</small>
          </Col>

          <Col xs={4} md={4} xl={4} className="sdados-card">
            <VscFolderLibrary className="sdados-icon" />
            <h5>Custo-benefício</h5>
            <small>
              Desenvolvendo uma solução personalizada para seu negócio por um valor justo.
            </small>
          </Col>
        </Row>
        <a href="#contact" className="sdados-btn">
          Faça seu orçamento
        </a>
      </Container>
    </section>
  );
};
