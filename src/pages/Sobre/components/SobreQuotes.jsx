import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const SobreQuotes = () => {
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
    <section className="sobre-quotes">
      <Container>
        <Row>
          <Col>
            <div className="quo-bx">
              <h2>Frases que fazem sentido com nossas crenças e objetivos</h2>
              <Carousel
                deveResetAutoplay={true}
                autoPlay={true}
                responsive={responsive}
                infinite={true}
                className="benefits-slider"
                autoPlaySpeed={6000}
              >
                <article className="quo-card">
                  <h5>Emanuel Lasker</h5>
                  <p>“O jogo mais difícil de ganhar é um jogo vencido”</p>
                  <small>Grande Mestre de xadrez, campeão mundial por 27 anos.</small>
                </article>
                <article className="quo-card">
                  <h5>Napoleon Hill</h5>
                  <p>
                    “Reunir-se é um começo, permanecer juntos é um progresso, e trabalhar
                    juntos é um sucesso.”
                  </p>
                  <small>Escritor de desenvolvimento pessoal norte-americano.</small>
                </article>
                <article className="quo-card">
                  <h5>Enrico Casarano</h5>
                  <p>
                    “Quando somamos força e sabedoria nos tornamos mais fortes e capazes
                    de alcançar metas e objetivos mais difíceis. ”
                  </p>
                  <small>CEO e fundador da E.C.MONEY.</small>
                </article>
                <article className="quo-card">
                  <h5>Elon Musk</h5>
                  <p>
                    “Quando algo é importante o suficiente, você faz, mesmo que as chances
                    não estejam a seu favor.”
                  </p>
                  <small>
                    Empreendedor bilionário e filantropo sul-africano-canadense.
                  </small>
                </article>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
