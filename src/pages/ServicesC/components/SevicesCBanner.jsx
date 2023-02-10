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
              <h2>
                O QUE É UMA ASSESSORIA PARA <p className="title">ABERTURA DE EMPRESAS?</p>
              </h2>
              <p>
                Abrir um negócio depende não só de uma boa ideia, mas de um acompanhamento
                de várias partes, esse procedimento é bem{" "}
                <small>
                  burocrático e envolve várias decisões que afetarão o futuro do negócio
                </small>
                , incluindo direitos, obrigações e estratégias.
              </p>
              <p>
                Cada negócio representa uma ideia única, por isso contar com o{" "}
                <small>apoio de quem tem experiência na área</small> e conhece todos os
                trâmites é fundamental, utilizando de técnicas e metodologias para{" "}
                <small>definir metas, elaborar objetivos e reduzir riscos.</small>{" "}
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
