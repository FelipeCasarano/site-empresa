import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = "Consultoria & Gestão Empresarial";
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
            <span className="tagline">Bem vindo a FI Corporation</span>
            <h1>
              {`GESTÃO INOVADORA PARA SEU NEGÓCIO`} <br />
              <span className="wrap">{text}</span>
            </h1>

            <p>
              A Fi & Company é uma consultoria de gestão que atende empresas, com o
              propósito compartilhado de obter resultados surpreendentes e superar a
              concorrência, utilizando a criatividade, tecnologia e direcionando seus
              recursos de forma eficiente.
            </p>
            <button onClick={() => console.log("connect")}>
              Entre em contato <ArrowRightCircle size={24} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
