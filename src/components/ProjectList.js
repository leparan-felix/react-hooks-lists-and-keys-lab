import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem
          key={project.id} // Assign a unique key based on project id
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectList;
