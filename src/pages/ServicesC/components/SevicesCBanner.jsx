import { Row, Col } from "react-bootstrap";
import bulb from "../../../assets/img/bulb.png";

export const SevicesCBanner = () => {
  return (
    <section className="service-c">
      <div className="module parallax parallax-3">
        <h1>Abertura de empresas</h1>
      </div>
      <Row className="module-row">
        <Col xs={12} md={6} xl={6} className="cal">
          <div className="module content">
            <div className="cont">
              <h2>Qualquer texto aqui..</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam
                reiciendis unde voluptatem dignissimos! Adipisci alias rerum commodi ad
                excepturi. Quod aut maxime non architecto numquam vel et, magnam eius!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam
                reiciendis unde voluptatem dignissimos! Adipisci alias rerum commodi ad
                excepturi. Quod aut maxime non architecto numquam vel et, magnam eius!
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} xl={6} className="cal-img-3">
          <div className="module-img">
            <img src={bulb} alt="Bulb Img" />
          </div>
        </Col>
      </Row>
    </section>
  );
};
