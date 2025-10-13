"use client";

import React from "react";
import { useSectionInView } from "@/common/lib/hooks";
import { projectsData } from "@/common/lib/data";
import Project from "./_components/project";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.25);

  return (
    <section
      className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
      id="projects"
      ref={ref}
      aria-label="Projects section"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="my-24" role="list" aria-label="Portfolio projects">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <SectionDivider />
    </section>
  );
}
