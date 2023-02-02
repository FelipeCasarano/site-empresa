import { Container, Row, Col } from "react-bootstrap";
import historia from "../../../assets/img/historia.jpg";

export const SobreIdentity = () => {
  return (
    <section className="sobre-ide">
      <Container>
        <Row className="cont-ide aligh-items-center">
          <Col xs={12} md={6} xl={6}>
            <div className="text-ide">
              <h3>Nossa identidade</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.
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
