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
                Somos um grupo de Administradores, Contadores, Desenvolvedores e Técnicos
                de TI, extremamente capacitados a somar força e sabedoria com o objetivo
                de aprimorar a gestão do seu negócio, minimizando gastos e maximizando
                resultados.
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
