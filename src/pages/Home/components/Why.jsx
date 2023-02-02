import { useState } from "react";
import { Container, Row } from "react-bootstrap";

export const Why = () => {
    const [changeState, setchangeState] = useState(1);

    const changeTab = (index) => {
        setchangeState(index);
    };

    return (
        <section className="why" id="why">
            <Container>
                <Row>
                    <h2 className="section-title">
                        Como nós podemos ajudar sua empresa?
                    </h2>
                    <span className="section-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Excepturi, itaque.
                    </span>
                    <div className="why-container container">
                        <div className="why-tabs">
                            <div
                                className={
                                    changeState === 1
                                        ? "why-button why-active button-flex"
                                        : "why-button button-flex"
                                }
                                onClick={() => changeTab(1)}
                            >
                                Gestão
                            </div>
                            <div
                                className={
                                    changeState === 2
                                        ? "why-button why-active button-flex"
                                        : "why-button button-flex"
                                }
                                onClick={() => changeTab(2)}
                            >
                                Brand
                            </div>
                        </div>
                        <div className="why-sections">
                            <div
                                className={
                                    changeState === 1
                                        ? "why-content why-content-active"
                                        : "why-content"
                                }
                            >
                                <div className="why-data">
                                    <div>
                                        <h3 className="why-title">Clareza</h3>
                                        <span className="why-subtitle">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing.
                                        </span>
                                    </div>
                                    <div>
                                        <span className="why-rouder"></span>
                                        <span className="why-line"></span>
                                    </div>
                                </div>
                                <div className="why-data">
                                    <div></div>
                                    <div>
                                        <span className="why-rouder"></span>
                                        <span className="why-line"></span>
                                    </div>
                                    <div>
                                        <h3 className="why-title">
                                            Crecimento
                                        </h3>
                                        <span className="why-subtitle">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing.
                                        </span>
                                    </div>
                                </div>
                                <div className="why-data">
                                    <div>
                                        <h3 className="why-title">Processo</h3>
                                        <span className="why-subtitle">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing.
                                        </span>
                                    </div>
                                    <div>
                                        <span className="why-rouder"></span>
                                        <span className="why-line"></span>
                                    </div>
                                </div>
                                <div className="why-data">
                                    <div></div>
                                    <div>
                                        <span className="why-rouder"></span>
                                        <span className="why-line"></span>
                                    </div>
                                    <div>
                                        <h3 className="why-title">
                                            Consolidação
                                        </h3>
                                        <span className="why-subtitle">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing.
                                        </span>
                                    </div>
                                </div>
                                <div className="why-data">
                                    <div>
                                        <h3 className="why-title">
                                            Infraestrutura
                                        </h3>
                                        <span className="why-subtitle">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing.
                                        </span>
                                    </div>
                                    <div>
                                        <span className="why-rouder"></span>
                                        <span className="why-line"></span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    changeState === 2
                                        ? "why-content why-content-active"
                                        : "why-content"
                                }
                            >
                                <div className="why-data">
                                    <div>
                                        <h3 className="why-title">Ideia</h3>
                                        <span className="why-subtitle">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing.
                                        </span>
                                    </div>
                                    <div>
                                        <span className="why-rouder"></span>
                                        <span className="why-line"></span>
                                    </div>
                                </div>
                                <div className="why-data">
                                    <div></div>
                                    <div>
                                        <span className="why-rouder"></span>
                                        <span className="why-line"></span>
                                    </div>
                                    <div>
                                        <h3 className="why-title">Pessoas</h3>
                                        <span className="why-subtitle">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing.
                                        </span>
                                    </div>
                                </div>
                                <div className="why-data">
                                    <div>
                                        <h3 className="why-title">Agilidade</h3>
                                        <span className="why-subtitle">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing.
                                        </span>
                                    </div>
                                    <div>
                                        <span className="why-rouder"></span>
                                        <span className="why-line"></span>
                                    </div>
                                </div>
                                <div className="why-data">
                                    <div></div>
                                    <div>
                                        <span className="why-rouder"></span>
                                        <span className="why-line"></span>
                                    </div>
                                    <div>
                                        <h3 className="why-title">
                                            Escalabilidade
                                        </h3>
                                        <span className="why-subtitle">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};
