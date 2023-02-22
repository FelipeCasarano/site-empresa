import { Row, Col } from "react-bootstrap";
import rocket from "../../../assets/img/rocket.webp";

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
              <h2>
                O QUE É UMA ASSESSORIA PARA <p className="title">STARTUPS?</p>
              </h2>
              <p>
                Transformar uma Startup em um negócio bem-sucedido exige uma árdua jornada
                de trabalho, conhecimento e suporte adequado.{" "}
                <small>
                  Pois é um modelo de negócios escalável, repetível e com uma ideia
                  inovadora,
                </small>{" "}
                que exige um conjunto de estudos e experiências, diferente dos modelos
                tradicionais.
              </p>
              <p>
                <small>Cada startup representa um negócio único,</small> que necessita de
                uma metodologia que se adeque à sua empresa, em conjunto o conhecimento e
                competência de profissionais altamente capacitados e know-how.
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
