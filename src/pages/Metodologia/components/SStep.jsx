import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img3 from "../../../assets/img/chess.png";

export const SStep = () => {
  return (
    <section className="second-step">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={5} className="s-info">
            <div>
              <h3>Inovação e Conceito</h3>
              <p>
                O mercado atual é cada vez mais instável, e sua capacidade de inovar e se
                destacar é o que mais faz diferença na{" "}
                <small>longevidade da sua empresa,</small> algo bem mais difícil na
                prática do que na teoria. Nossa empresa acredita que a tecnologia é um
                poderoso aliado em conjunto das metodologias, que utilizadas com os
                conceitos certos se tornam uma{" "}
                <small>ferramenta decisiva no futuro negócio,</small> proporcionando
                eficiência, diminuindo riscos e criando facilidades.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <img src={img3} alt="robot chess" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
