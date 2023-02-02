import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img3 from "../../../assets/img/planet.png";

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
              <h3>Metodologia</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
