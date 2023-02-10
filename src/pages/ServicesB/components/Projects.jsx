import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      description: "Assesoria adm financeira",
      text: "Assesoria adm financeira",
    },
    {
      description: "Auditoria interna e externa - Controladoria",
      text: "Auditoria interna e externa - Controladoria",
    },
    {
      description: "Tomada de recursos, Linha de crédito e Capital de giro",
      text: "Tomada de recursos, Linha de crédito e Capital de giro",
    },
    {
      description: "Estruturação de tesouraria - Business Plan, DRE/EBITDA",
      text: "Estruturação de tesouraria - Business Plan, DRE/EBITDA",
    },
    {
      description: "Fluxo de caixa, Gestão de risco e Plano Empresário",
      text: "Fluxo de caixa, Gestão de risco e Plano Empresário",
    },
    {
      description: "Terceirização de serviços adm financeiro",
      text: "Terceirização de serviços adm financeiro",
    },
    {
      description: "Implementação de centro de custo, Curva ABC, POP",
      text: "Implementação de centro de custo, Curva ABC, POP",
    },
  ];
  const projects2 = [
    {
      description: "Gestão da TI completa",
      text: "Gestão da TI completa",
    },
    {
      description: "Desenvolvimento de site",
      text: "Desenvolvimento de site",
    },
    {
      description: "Inteligência de dados",
      text: "Inteligência de dados",
    },
    {
      description: "Implantação de ERP",
      text: "Implantação de ERP",
    },
    {
      description: "Configuração e montagem de rede/Wi-Fi/Data Center",
      text: "Configuração e montagem de rede/Wi-Fi/Data Center",
    },
    {
      description: "Atualização de softwares e hardwares",
      text: "Atualização de softwares e hardwares",
    },
    {
      description: "Marketing digital/Design & Development",
      text: "Marketing digital/Design & Development",
    },
  ];

  return (
    <section className="project">
      <Container>
        <Row className="project-row">
          <Col size={12}>
            <h2>Serviços</h2>
            <p>
              A assessoria consiste em um serviço empresarial, com objetivo de
              diagnosticar possíveis problemas, analisar benchmarks, reconhecer e apontar
              novas oportunidades e entregar soluções práticas. Aplicada por profissionais
              da área com conhecimento como PMO, Gestor, Investidor, Desenvolvedor e
              Marketing.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Gestão</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tecnologia</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
