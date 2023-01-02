import React from "react";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img src={item.image} alt="" className="project__img" />
      <h3 className="project__title">{item.title}</h3>
      <a href={item.link1} className="project__button">
        <i className="bx bx-link project__button-icon"></i>Demo
      </a>
      <a href={item.link2} className="project__button">
        <i className="bx bxl-github project__button-icon"></i>GitHub
      </a>
    </div>
  );
};

export default ProjectItems;
