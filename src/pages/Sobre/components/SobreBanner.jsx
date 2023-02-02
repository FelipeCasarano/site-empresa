import { Container, Row, Col } from "react-bootstrap";

export const SobreBanner = () => {
  return (
    <section className="sobre-banner">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8}>
            <div>
              <span className="tagline">Quem Somos</span>
              <h1>Tecnologia e conhecimento,</h1>
              <h2>são os alidos do crescimento.</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.
              </p>
            </div>
          </Col>
          <Col xs={6} md={6} xl={6}>
            <div className="sb-element2"></div>
            <div className="sb-element1"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
