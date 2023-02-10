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
            <a href="/para-empresas-tradicionais">
              <FaAward className="sdados-icon" />
              <h5>Diagnosticando a saúde financeira</h5>
              <small>Como está a saúde financeira do seu negócio?</small>
            </a>
          </Col>

          <Col xs={4} md={4} xl={4} className="sdados-card-1">
            <a href="/para-empresas-tradicionais">
              <FiUser className="sdados-icon-1" />
              <h5>Implantando e ajustando processos</h5>
              <small>
                Sua atividade permite a padronização e gerenciamento de dados com maior
                nível de eficiência nas rotinas?
              </small>
            </a>
          </Col>

          <Col xs={4} md={4} xl={4} className="sdados-card">
            <a href="/para-empresas-tradicionais">
              <VscFolderLibrary className="sdados-icon" />
              <h5>Custo-Benefício</h5>
              <small>Você sabe qual é o “Ponto de Equilíbrio” do seu negócio?</small>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
