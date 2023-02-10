import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, text }) => {
  return (
    <Col size={6} sm={6} md={6}>
      <div className="proj-imgbx">
        <h6 className="hh6">{text}</h6>
        <div className="proj-txtx">
          <h4>{title}</h4>

          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
