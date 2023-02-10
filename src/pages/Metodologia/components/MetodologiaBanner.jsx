import { Container, Row, Col } from "react-bootstrap";

export const MetodologiaBanner = () => {
  return (
    <section className="metodologia-banner">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6}>
            <div>
              <h1>Nossa Metodologia</h1>
              <p>
                Identificar as premissas críticas e estabelecer as diretrizes necessárias
                para a elaboração correta do plano de ação.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <div className="mb-element1"></div>
            <div className="mb-element2"></div>
            <div className="mb-element3"></div>
            <div className="mb-element4"></div>
            <div className="mb-element5"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
