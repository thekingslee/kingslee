import React from "react";
import ProjectCTA from "./ProjectCTA";
import ProjecctTag from "./ProjectTag";

const PinnedProject = ({ project }) => {
  const { Type, CTA1, CTA2, Link1, Link2, Label, Description, Title } =
    project.fields;

  return (
    <div className=" w-full bg-imagination p-8 mb-2">
      <div className="md:flex ">
        <ProjecctTag type={Type} />

        <div className="md:ml-6">
          <p className="text-[28px] font-bold text-dark">{Title}</p>
          <p className="text-sm mt-[2px]">{Label}</p>
        </div>
      </div>

      <p className="mt-4 mb-8">{Description}</p>

      <div className="flex">
        <ProjectCTA cta={CTA1} link={Link1} />
        {CTA2 ? <ProjectCTA cta={CTA2} link={Link2} /> : ""}
      </div>
    </div>
  );
};

export default PinnedProject;
