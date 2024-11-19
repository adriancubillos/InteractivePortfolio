import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import RenderModel from "../../components/RenderModel";
import Staff from "../../components/models/Staff";
import ProjectsList from "../../components/projects";
import { projectsData } from "../../data";



export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="-z-50 w-full h-full object-cover object-center opacity-25" />

      <ProjectsList projects={projectsData} />

      <div className="flex items-center justify-start absolute top-32 left-0 h-screen -z-20">
        <RenderModel preset="sunset">
          <Staff />
        </RenderModel>
      </div>

    </main>
  );
}
