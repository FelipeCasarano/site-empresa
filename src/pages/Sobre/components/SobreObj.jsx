import { Container, Row, Col } from "react-bootstrap";
import historia from "../../../assets/img/historia.webp";

export const SobreObj = () => {
  return (
    <section className="sobre-obj">
      <Container>
        <Row className="cont-obj aligh-items-center">
          <Col xs={12} md={12} xl={12}>
            <img src={historia} alt="historia" />
          </Col>
          <Col xs={12} md={12} xl={12}>
            <div>
              <h3>Nossa Historia</h3>
              <p>
                E.C.MONEY foi constituída por executivos e profissionais oriundos de
                grandes companhias que trazem sua experiência “knowledge”, com objetivo
                maior de entender e ajudar outras empresas na sua melhor proposta de
                negócio.
                <br />
                <br />
                Com projetos nos mais diversos segmentos, nossa abordagem é customizada
                aos clientes, da estratégia à consolidação, de ponta a ponta, incorporando
                as melhores tecnologias e metodologias disponíveis.
                <br />
                <br />
                Somos reconhecidos pela capacidade de implementação de projetos em nível
                estratégico (estratégia, modelo de negócios e estrutura corporativa),
                tático (implementação e alinhamento de processos e metas) e operacional
                (alinhamento e acompanhamento de operações), principalmente ajudando seu
                negócio a ter <small>
                  CRESCIMENTO, COMPETITIVIDADE E LUCRATIVIDADE
                </small>{" "}
                .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
