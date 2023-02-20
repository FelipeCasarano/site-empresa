import { Container, Row, Col } from "react-bootstrap";

import crssp from "../../../assets/img/crcspphroom.png";
import crasp from "../../../assets/img/crasp.png";
import decore from "../../../assets/img/decore-PhotoRoom.png";
import sindcont from "../../../assets/img/SINDCONT-PhotoRoom.png";

export const SobreInfo = () => {
  return (
    <section className="sobre-info">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={6} md={6} xl={3}>
            <img className="info-img1" src={crssp} alt="certficado" />
          </Col>
          <Col xs={6} md={6} xl={3}>
            <img className="info-img2" src={crasp} alt="certficado" />
          </Col>
          <Col xs={6} md={6} xl={3}>
            <img className="info-img3" src={decore} alt="certficado" />
          </Col>
          <Col xs={6} md={6} xl={3}>
            <img className="info-img4" src={sindcont} alt="certficado" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
