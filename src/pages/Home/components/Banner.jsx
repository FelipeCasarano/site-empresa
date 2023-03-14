import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = `Assessoria Financeira \n&\n Tecnologia Empresarial`;
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 200);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let fullText = toRotate;
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bem vindo a E.C.MONEY</span>
            <h1>
              {`GESTÃO INOVADORA PARA SEU NEGÓCIO`} <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              A E.C.Money é uma empresa de Assessoria Financeira & Tecnologia Empresarial
              que atende empresas, com o propósito compartilhado de alavancar e obter
              resultados surpreendentes superando a concorrência, utilizando o “know-how”
              obtido ao longo dos anos, a criatividade, tecnologia, e direcionando seus
              recursos de forma eficiente e qualitativa para sua empresa.
            </p>
            <a href="/entre-em-contato">
              <button>
                Entre em contato <ArrowRightCircle size={24} />
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
