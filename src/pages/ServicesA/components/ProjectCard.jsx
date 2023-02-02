import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={6} sm={6} md={6}>
      <div className="proj-imgbx">
        <h6 className="hh6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ducimus?
        </h6>
        <div className="proj-txtx">
          <h4>{title}</h4>

          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
