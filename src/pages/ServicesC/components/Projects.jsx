import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      description: "Apoio jurídico e Contábil",
      text: "Apoio jurídico e Contábil",
    },
    {
      description: "Linha de crédito, Capital de giro, Geric, BNDES, PRONAMPE",
      text: "Linha de crédito, Capital de giro, Geric, BNDES, PRONAMPE",
    },
    {
      description: "Implementação de tesouraria - Business Plan, DRE/EBITDA",
      text: "Implementação de tesouraria - Business Plan, DRE/EBITDA",
    },
    {
      description: "Terceirização de serviços adm financeiro/RH e Compras",
      text: "Terceirização de serviços adm financeiro/RH e Compras",
    },
    {
      description: "Tesouraria corporativa/Sistemas integrados",
      text: "Tesouraria corporativa/Sistemas integrados",
    },
    {
      description: "Plano de contas, Implantação de processos e Controladoria geral",
      text: "Plano de contas, Implantação de processos e Controladoria geral",
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
