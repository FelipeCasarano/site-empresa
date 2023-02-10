import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const FoStep = () => {
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
    <section className="fourth-step">
      <Container>
        <Row>
          <Col>
            <div className="fo-bx">
              <h2>Perguntas frequentes</h2>
              <Carousel
                deveResetAutoplay={true}
                autoPlay={true}
                responsive={responsive}
                infinite={true}
                className="benefits-slider"
                autoPlaySpeed={10000}
              >
                <article className="fo-card">
                  <h5>Como funciona a assessoria na E.C.MONEY?</h5>
                  <small>
                    A assessoria da E.C. Money é totalmente personalizada para seu
                    negócio, vinculada a uma equipe de assessoria ou a um assessor
                    exclusivo, em conjunto de diversos parceiros com intuito de entregar o
                    melhor custo-benefício.
                  </small>
                </article>
                <article className="fo-card">
                  <h5>Sua metodologia serve para pequenas e médias empresas?</h5>
                  <small>
                    Sim, independente do seu tamanho utilizar de métodos para seu
                    crescimento é um grande diferencial, quanto mais cedo aplicado maiores
                    serão os benefícios futuros.
                  </small>
                </article>
                <article className="fo-card">
                  <h5>Quanto custa a assessoria da E.C.MONEY?</h5>
                  <small>
                    Na E.C.Money adotamos a taxa zero, ou seja, o primeiro contato não tem
                    custo nenhum.
                    <br /> Porém, dependendo do que se deseja será avaliado por uma
                    equipe, com a missão de ser o mais acessível e completo.
                  </small>
                </article>
                <article className="fo-card">
                  <h5>Posso enviar meu currículo ?</h5>
                  <small>
                    Sim, a E.C.Money está em constante crescimento e buscamos sempre
                    adquirir novos talentos do mercado, para entregar o melhor serviço
                    para nossos clientes.
                  </small>
                </article>
              </Carousel>
              <a href="/entre-em-contato">
                <button className="bt-benefits">
                  Fale com um especialista{" "}
                  <ArrowRightCircle size={24} color="rgb(92, 64, 218)" />
                </button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
