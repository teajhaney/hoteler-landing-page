import React from "react";
import { projects } from "../constant/constants";

const ProjectSection = () => {
  return (
    <div className="bodyContent  bg-primary/10 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {projects.map((project) => (
          <div
            key={project.number}
            className="relative h-42 flex justify-center items-center">
            <h1 className="text-[100px] font-times text-primary opacity-50">
              {project.number}
            </h1>
            <h1 className="absolute inset-0 flex justify-center items-center font-times text-secondary text-2xl opacity-50">
              {project.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
