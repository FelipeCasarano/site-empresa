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
          <h2 className="section-title">Como nós podemos ajudar sua empresa?</h2>

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
                GESTÃO
              </div>
              <div
                className={
                  changeState === 2
                    ? "why-button why-active button-flex"
                    : "why-button button-flex"
                }
                onClick={() => changeTab(2)}
              >
                PROJECT
              </div>
            </div>
            <div className="why-sections">
              <div
                className={
                  changeState === 1 ? "why-content why-content-active" : "why-content"
                }
              >
                <div className="why-data">
                  <div>
                    <h3 className="why-title">Clareza</h3>
                    <span className="why-subtitle">
                      Inicialmente realizamos um diagnóstico econômico financeiro da
                      empresa para melhor clareza da na tomada conjunta de decisões
                      recomendáveis.
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
                    <h3 className="why-title">Crescimento</h3>
                    <span className="why-subtitle">
                      Nossa assessoria consiste em colher dados e aprimorar metodologias
                      de crescimento, competitividade e lucratividade/PE-Breaking Even
                      Point.
                    </span>
                  </div>
                </div>
                <div className="why-data">
                  <div>
                    <h3 className="why-title">Processo</h3>
                    <span className="why-subtitle">
                      Diante da coleta de informações gerenciais estabelecemos pequenas
                      mudanças significativas, melhorando e aprimorando os processos
                      corporativos em geral.
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
                    <h3 className="why-title">Consolidação</h3>
                    <span className="why-subtitle">
                      Relatórios gerenciais, infraestrutura e capital humano especializado
                      para consolidar a melhor visão estratégica.
                    </span>
                  </div>
                </div>
                <div className="why-data">
                  <div>
                    <h3 className="why-title">Infraestrutura</h3>
                    <span className="why-subtitle">
                      Contamos com parceiros e capital humano no melhor desenho e layout
                      do seu negócio tanto físico quanto econômico.
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
                  changeState === 2 ? "why-content why-content-active" : "why-content"
                }
              >
                <div className="why-data">
                  <div>
                    <h3 className="why-title">Ideia</h3>
                    <span className="why-subtitle">
                      Inicialmente fazemos a compreensão da ideia e definimos as
                      prioridades, objetivos e dificuldades.
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
                      A partir da elaboração podemos definir as tarefas e as pessoas
                      responsáveis, utilizando critérios corporativos e individuais.
                    </span>
                  </div>
                </div>
                <div className="why-data">
                  <div>
                    <h3 className="why-title">Agilidade</h3>
                    <span className="why-subtitle">
                      Utilizando metas e indicadores para otimizar os processos e
                      acompanhar com maior precisão a evolução de cada etapa.
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
                    <h3 className="why-title">Escalabilidade</h3>
                    <span className="why-subtitle">
                      Expandir e evoluir o modelo de negócio sem comprometer a qualidade e
                      sem gerar um aumento expressivo dos gastos, mantendo um bom
                      custo-benefício a longo prazo.
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
