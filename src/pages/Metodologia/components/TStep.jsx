import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img3 from "../../../assets/img/agile.png";

export const TStep = () => {
  return (
    <section className="third-step">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7} className="t-img">
            <img src={img3} alt="agile" />
          </Col>
          <Col xs={12} md={6} xl={5} className="t-info">
            <div>
              <h3>Metodologias Ágeis</h3>
              <p>
                Com a constante evolução da indústria, as empresas precisaram buscar
                processos mais eficientes, dessa forma, as metodologias ágeis chegaram com
                o intuito de resolver,{" "}
                <small>criando processos mais organizados e otimizados.</small> Mas alguns
                pontos da{" "}
                <small>
                  experiência e dos conhecimentos clássicos não podem ser abandonados,
                </small>{" "}
                como no xadrez que tem diversas regras e seus princípios e a partir de um
                bom entendimento pode se elaborar uma estratégia, nossa metodologia busca
                entender seu objetivo, utilizando conceitos tradicionais e{" "}
                <small> a partir disso elaborar um modelo</small> utilizando das
                metodologias ágeis e processos modernos.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
