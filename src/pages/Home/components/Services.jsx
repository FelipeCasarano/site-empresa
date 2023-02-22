import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoRocketOutline, IoStorefrontOutline, IoBulbOutline } from "react-icons/io5";
import colorSharp from "../../../assets/img/color-sharp.webp";
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
      <img className="background-image-left" src={colorSharp} alt="background" />
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
                  <h5 className="startup">Startups</h5>
                  <IoRocketOutline size={50} alt="Rocket" className="icon" />
                  <p>
                    Implementação de gestão especializada no crescimento sustentável,
                    competitividade e lucratividade. <br /> Focamos na segurança da
                    informação para tomada de decisões mais assertivas, melhoria dos
                    processos e dados financeiros.
                  </p>
                  <a href="/para-startups">
                    <button className="bt-services">
                      Saiba mais <ArrowRightCircle size={24} color="rgb(92, 64, 218)" />
                    </button>
                  </a>
                </div>
                <div className="item">
                  <h5>Empresas Tradicionais</h5>
                  <IoStorefrontOutline size={50} alt="Store" className="icon" />
                  <p>
                    Escaneamos sua empresa diagnosticando e otimizando os processos
                    administrativos financeiros, com foco no core business aprimoramos a
                    ferramenta tecnológica, ERP, sistemas de cash front e/ou back office.
                    <br />
                    Minimizando custos e maximizando resultados.
                  </p>
                  <a href="/para-empresas-tradicionais">
                    <button className="bt-services">
                      Saiba mais <ArrowRightCircle size={24} color="rgb(92, 64, 218)" />
                    </button>
                  </a>
                </div>
                <div className="item">
                  <h5>Abertura de Empresas</h5>
                  <IoBulbOutline size={50} alt="Buld" className="icon" />
                  <p>
                    Contamos com larga parceria e know-how para toda orientação pertinente
                    à abertura de uma empresa ou filiais e franquias.
                    <br />
                    Planejamento estratégico, profissionais especializados tais como:
                    <br />
                    Apoio jurídico, marketing digital, interface web, sites, apps e toda a
                    infraestrutura administrativa - BPO.
                  </p>
                  <a href="/para-abertura-de-empresas">
                    <button className="bt-services">
                      Saiba mais <ArrowRightCircle size={24} color="rgb(92, 64, 218)" />
                    </button>
                  </a>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
