import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp2 from "../../../assets/img/color-sharp2.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { FaAward } from "react-icons/fa";

export const Benefits = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="benefits">
      <img className="background-image-right" src={colorSharp2} alt="" />
      <Container>
        <Row>
          <Col>
            <div className="benefits-bx">
              <h2>Benefícios</h2>

              <Carousel
                deveResetAutoplay={true}
                autoPlay={true}
                responsive={responsive}
                infinite={true}
                className="benefits-slider"
                autoPlaySpeed={5000}
              >
                <article className="benefits-card">
                  <FaAward className="benefits-icon" />
                  <h5>Experiência</h5>
                  <small>Mais de 10 anos solucionando dificuldades empresariais!</small>
                </article>
                <article className="benefits-card">
                  <FaAward className="benefits-icon" />
                  <h5>Experiência</h5>
                  <small>Mais de 10 anos solucionando dificuldades empresariais!</small>
                </article>
                <article className="benefits-card">
                  <FaAward className="benefits-icon" />
                  <h5>Experiência</h5>
                  <small>Mais de 10 anos solucionando dificuldades empresariais!</small>
                </article>
              </Carousel>
              <button
                className="bt-benefits"
                onClick={() => console.log("abertura-de-empresas")}
              >
                Fale com um especialista{" "}
                <ArrowRightCircle size={24} color="rgb(92, 64, 218)" />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
