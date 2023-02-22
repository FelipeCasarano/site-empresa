import { Container, Row, Col } from "react-bootstrap";
import historia from "../../../assets/img/graphic2.webp";

export const SobreIdentity = () => {
  return (
    <section className="sobre-ide">
      <Container>
        <Row className="cont-ide aligh-items-center">
          <Col xs={12} md={6} xl={6}>
            <div className="text-ide">
              <h3>Nossa identidade</h3>
              <p>
                Valorizamos a experiência, o capital humano e a técnica especializada na
                resolução de problemas complexos, construímos respostas para os seus
                desafios atuais e futuros.
                <br />
                Atuamos com soluções customizadas ou simplesmente ajustadas, levando em
                conta a história, objetivos, processos, mercado e cultura dos nossos
                clientes.
                <br />
                Em cada projeto, o aprendizado é mútuo e, o conhecimento, sempre
                aprimorado e compartilhado. É assim que damos autonomia e eficiência aos
                nossos clientes para garantir a sustentabilidade dos seus negócios.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={6} className="img-ide">
            <img src={historia} alt="historia" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
