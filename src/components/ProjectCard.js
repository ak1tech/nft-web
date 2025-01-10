import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Goals" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export const ProjectCard2 = ({ title, description, imgUrl, link, id, link2 }) => {
  return (

    <Col size={12} sm={6} md={4}>
    <a href={link} target="projects2" rel="projects2">
      <div className="proj-imgbx2">
        <img src={imgUrl} alt="Dreams" />
        <div className="proj-txtx2">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={link2} target="projects2" rel="projects2">
          <h5>{id}</h5>
          </a>
        </div>
      </div>
      </a>
    </Col>
  );
};

export const ProjectCard3 = ({ title, description, imgUrl, link, id, link2 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="projects3" rel="projects3">
        <div className="proj-imgbx3">
          <img src={imgUrl} alt="RARI" />
          <div className="proj-txtx3">
            <h4>{title}</h4>
            <span>{description}</span>
            <a href={link2} target="projects3" rel="projects3">
          <h5>{id}</h5>
          </a>
          </div>
        </div>
        </a>
    </Col>
  );
};