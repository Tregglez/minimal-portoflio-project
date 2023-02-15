import React from 'react';
import info from './ProjectInfomation';

const Projects = () => {
  return (
    <div className='w-full h-screen bg-cover bg-light-bg dark:bg-dark-bg dark:bg-cover dark:text-white'>
      {/* Navigation */}
      <h1 className='px-5 py-6 font-bold text-xl'>
        <a href="/" style={{ display: 'inline-block' }}>
          <p className='mr-4 mb-0 dark:text-[#CD49C0] text-[#58C55C]'>&lt;<span className='text-black dark:text-white'> Home </span>&gt;</p>
        </a>
        <span className='text-[#CD49C0] dark:text-[#58C55C]' style={{ display: 'inline-block', margin: '0 0 0 5px', padding: '0' }}>02</span> Projects
      </h1>

      {/* Projects */}
      <div className='w-full flex flex-col justify-center items-center text-center'>
        {info.map((project) => (
          <div
            key={project.id}
            className='mb-2'
          >
            <h2>{project.title} / {project.micro_description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
