import { Container, Row, Col } from "react-bootstrap";
import historia from "../../../assets/img/historia.jpg";

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
