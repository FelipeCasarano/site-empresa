import { Container, Row, Col } from "react-bootstrap";
import contato from "../../../assets/img/contato.webp";

export const ContactBanner = () => {
  return (
    <section className="cnt-banner">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6}>
            <h1>Qual é sua necessidade?</h1>
            <br />
            <p>
              Conte conosco para desenvolver o melhor caminho para alcançar grandes
              resultados.
            </p>{" "}
            <p>
              Ficou com alguma dúvida? Gostaria de entender melhor? Deixe nos uma mensagem
              e entraremos em contato!
            </p>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <img src={contato} alt="contato" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
