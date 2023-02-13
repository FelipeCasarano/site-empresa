import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputMask from "react-input-mask";
import axios from "axios";
import Swal from "sweetalert2";

export const ContactForm = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    objective: "",
    anexo: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  const handleInputChange = (e) => {
    formDetails[e.target.name] = e.target.files[0];
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    const formData = new FormData();
    Object.keys(formDetails).forEach((key) => formData.append(key, formDetails[key]));
    axios
      .post("/send", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then(Swal.fire("Enviado!", "Logo retornaremos seu contato…", "success"))
      .catch((error) => console.log(error));
    setButtonText("Enviar");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Col xs={12} md={12} xl={12}>
          <div>
            <h2>Como podemos te auxiliar?</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} md={6} xl={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Primeiro nome*"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                  />
                </Col>
                <Col xs={12} md={6} xl={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Último nome*"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    required
                  />
                </Col>
                <Col xs={12} md={6} xl={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Endereço de email*"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                </Col>
                <Col xs={12} md={6} xl={6} className="px-1">
                  <InputMask
                    className="input-f"
                    type="tel"
                    name="tel"
                    autoComplete="tel"
                    mask="(99) 99999-9999"
                    maskChar=" "
                    value={formDetails.phone}
                    placeholder="Celular (xx)xxxxx-xxxx*"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    required
                  />
                </Col>
                <Col xs={12} md={6} xl={6} className="px-1">
                  <select
                    required
                    value={formDetails.objective.value}
                    onChange={(e) => onFormUpdate("objective", e.target.value)}
                  >
                    <option value="" disabled selected>
                      Objetivo:
                    </option>
                    <option className="select-items" value="Empresas">
                      Empresas
                    </option>
                    <option className="select-items" value="Pessoa_Fisica">
                      Pessoa Física
                    </option>
                    <option className="select-items" value="Curriculo">
                      Curriculo
                    </option>
                  </select>
                </Col>
                <Col xs={12} md={6} xl={6} className="px-1">
                  <input
                    type="file"
                    id="anexo"
                    name="anexo"
                    multiple
                    onChange={handleInputChange}
                  />
                </Col>
                <Col xs={12} md={12} xl={12} className="px-2">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Mensagem"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
            <p>
              {" "}
              Ao informar meus dados, eu concordo com os{" "}
              <a href="termos-de-privacidade" className="terms-1">
                Termos de Privacidade
              </a>
            </p>
          </div>
        </Col>
      </Container>
    </section>
  );
};
