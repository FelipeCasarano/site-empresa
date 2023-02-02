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
              <h3>Metodologia</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.
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
