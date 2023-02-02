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
                autoPlaySpeed={5000}
              >
                <article className="quo-card">
                  <h5>Autor</h5>
                  <small>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex expedita
                    quis fugiat magnam suscipit velit exercitationem, dolores praesentium
                    aut doloremque. Aperiam porro facere minima inventore maxime quos
                    magnam voluptas facilis.
                  </small>
                </article>
                <article className="quo-card">
                  <h5>Autor</h5>
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nobis
                    minima facilis eaque excepturi accusantium ratione odit, consequatur
                    ea nesciunt, inventore voluptas saepe voluptate dolorum iure
                    dignissimos itaque nostrum ut.
                  </small>
                </article>
                <article className="quo-card">
                  <h5>Autor</h5>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum amet
                    est neque, nesciunt magnam vero itaque! Iste labore amet ipsam?
                    Aliquid facilis quos at consequatur quibusdam dicta asperiores
                    molestiae placeat!
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
