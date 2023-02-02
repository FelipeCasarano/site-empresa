import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoRocketOutline, IoStorefrontOutline, IoBulbOutline } from "react-icons/io5";
import colorSharp from "../../../assets/img/color-sharp.png";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="services" id="services">
      <img className="background-image-left" src={colorSharp} alt="" />
      <Container>
        <Row>
          <Col>
            <div className="services-bx">
              <h2>Serviços</h2>
              <p>
                Utilizando uma metodologia que avalia e define os procedimentos ideais
                para cada empresa, podemos definir a melhor estratégia com os recursos
                disponíveis. <br /> Auxiliando negócios como:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="services-slider"
              >
                <div className="item">
                  <h5>
                    Startups <p className="transparent">Startups</p>
                  </h5>
                  <IoRocketOutline size={50} alt="Rocket" className="icon" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                    blanditiis?
                  </p>
                  <button className="bt-services" onClick={() => console.log("startups")}>
                    Saiba mais <ArrowRightCircle size={24} color="rgb(92, 64, 218)" />
                  </button>
                </div>
                <div className="item">
                  <h5>Empresas tradicionais</h5>
                  <IoStorefrontOutline size={50} alt="Store" className="icon" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                    blanditiis?
                  </p>
                  <button
                    className="bt-services"
                    onClick={() => console.log("empresas-tradicionais")}
                  >
                    Saiba mais <ArrowRightCircle size={24} color="rgb(92, 64, 218)" />
                  </button>
                </div>
                <div className="item">
                  <h5>Abertura de empresas</h5>
                  <IoBulbOutline size={50} alt="Buld" className="icon" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                    blanditiis?
                  </p>
                  <button
                    className="bt-services"
                    onClick={() => console.log("abertura-de-empresas")}
                  >
                    Saiba mais <ArrowRightCircle size={24} color="rgb(92, 64, 218)" />
                  </button>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
