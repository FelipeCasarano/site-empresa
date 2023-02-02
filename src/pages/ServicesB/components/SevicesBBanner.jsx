import { Row, Col } from "react-bootstrap";
import company from "../../../assets/img/company.png";

export const SevicesBBanner = () => {
  return (
    <section className="service-b">
      <div className="module parallax parallax-2">
        <h1>Empresas tradicionais</h1>
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
        <Col xs={12} md={6} xl={6} className="cal-img-2">
          <div className="module-img">
            <img src={company} alt="Company Img" />
          </div>
        </Col>
      </Row>
    </section>
  );
};
