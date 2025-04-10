import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{about}</p>
      {technologies && (
        <div>
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span> // Ensure each <span> has a unique key
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectItem;
