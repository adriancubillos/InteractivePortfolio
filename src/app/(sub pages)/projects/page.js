import Image from 'next/image';
import bg from '../../../../public/background/projects-background.png';
import RenderModel from '../../components/RenderModel';
import ProjectsList from '../../components/projects';
import { projectsData } from '../../data';
import dynamic from 'next/dynamic';

const Staff = dynamic(() => import('@/app/components/models/Staff'), {
  ssr: false,
});

export default function Projects() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <ProjectsList projects={projectsData} />

      <div
        className="flex items-center justify-center fixed top-16 lg:top-20 -z-10 
      -left-[40%] sm:-left-[44%] lg:-left-[45%]">
        <RenderModel preset="park">
          <Staff materialColor="#BA8055" />
        </RenderModel>
      </div>
    </>
  );
}
