import { Row, Col } from "react-bootstrap";
import company from "../../../assets/img/company.webp";

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
              <h2>
                O QUE É UMA ASSESSORIA PARA <p className="title">EMPRESAS?</p>
              </h2>
              <p>
                Ter uma empresa de sucesso não é apenas ter um modelo de negócio
                promissor, mas uma ampla quantidade de fatores, que exigem desde pequenas
                alterações a grandes mudanças. A fim de se{" "}
                <small>destacar dentre a concorrência ou por problemas internos,</small>{" "}
                muitas empresas acabam enfrentando dificuldades na{" "}
                <small>visualização de riscos e oportunidades.</small>
              </p>
              <p>
                É necessário uma <small>visão externa</small> para encontrar falhas e
                elaborar objetivos, em conjunto do conhecimento especializado com
                competência, utilizando de metodologia para alavancar e impulsionar a
                empresa a <small>grandes resultados.</small>
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
