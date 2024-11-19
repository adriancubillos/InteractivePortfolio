import React from 'react'
import ProjectLayout from './ProjectLayour';

const ProjectsList = ({ projects }) => {
  return (
    <div className='w-full max-w-4xl px-16 space-y-8 flex flex-col items-center'>
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </div>
  )
}

export default ProjectsList