import { Row, Col } from "react-bootstrap";
import rocket from "../../../assets/img/rocket.png";

export const SevicesABanner = () => {
  return (
    <section className="service-a">
      <div className="module parallax parallax-1">
        <h1>Startups</h1>
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
        <Col xs={12} md={6} xl={6} className="cal-img-1">
          <div className="module-img">
            <img src={rocket} alt="Rocket Img" />
          </div>
        </Col>
      </Row>
    </section>
  );
};
