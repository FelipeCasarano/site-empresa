import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img3 from "../../../assets/img/planet.webp";

export const FStep = () => {
  return (
    <section className="first-step">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7} className="f-img">
            <img src={img3} alt="planet" />
          </Col>
          <Col xs={12} md={6} xl={5} className="f-info">
            <div>
              <h3>Visão ampla e definindo modelos para os procedimentos</h3>
              <p>
                Nossa metodologia visa principalmente ser{" "}
                <small>
                  compatível com diversos negócios para atende-lo de forma personalizada,
                </small>{" "}
                mapeando seu funcionamento, equipe e objetivos. A partir destas
                informações e nosso “know-how” podemos utilizar de metodologias
                tradicionais do mercado como, as metodologias ágeis, balanced scored entre
                outras, definindo as mais adequadas e a{" "}
                <small>
                  moldando para maior assertividade e coesão com as características da sua
                  empresa.
                </small>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
