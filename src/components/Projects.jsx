import React, { useState } from 'react';
import projectInformation from './ProjectInfomation';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-cover bg-light-bg dark:bg-dark-bg dark:bg-cover dark:text-white">
      {/* Navigation */}
      <h1 className="px-5 py-6 font-bold text-xl fixed">
        <a href="/" style={{ display: "inline-block" }}>
          <p className="mr-0 mb-0 text-[#CD49C0] dark:text-[#58C55C]">
            <span className='text-black'>Home</span> //
          </p>
        </a>
        <span
          className="text-[#CD49C0] dark:text-[#58C55C]"
          style={{ display: "inline-block", margin: "0 0 0 5px", padding: "0" }}
        >
          03
        </span>{" "}
        Projects
      </h1>


      {/* Projects */}
      <div className="tabs-container flex w-full h-screen justify-between items-center sm-screen-change">
        <div className="tabs flex flex-col w-4/12 ml-24 mb-16 sml-screen-margin top-project">
          {projectInformation.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium leading-5 text-gray-500 hover:text-black focus:outline-none focus:text-black focus:font-bold ${
                index === activeIndex ? 'text-black border-0 font-bold' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h2 className='btm-border'>{tab.title} / {tab.micro_description}</h2>
            </button>
          ))}
        </div>

        <div className="tab-content flex flex-wrap w-5/12 justify-center items-center mr-32 sml-screen-margin">
          <h2 className='py-3 px-5 font-bold'>{projectInformation[activeIndex].title}</h2>
          <img src={projectInformation[activeIndex].image} alt={projectInformation[activeIndex].title} />
            <p className='px-2 py-1 mx-10 mt-5 border-solid border-2 border-gray-400 rounded-md'>{projectInformation[activeIndex].tech_stack}</p>
          <p className='py-5 text-center small-text'>{projectInformation[activeIndex].description} <br /><span className='font-bold'>{projectInformation[activeIndex].warning}</span></p>
          <div className='py-5'>
            {projectInformation[activeIndex].github && (
              <a href={projectInformation[activeIndex].github} className='px-2 py-1 mx-10 border-solid border-2 border-gray-400 rounded-md'>GitHub</a>
            )}
            {projectInformation[activeIndex].demo && (
              <a href={projectInformation[activeIndex].demo} className='px-2 py-1 border-solid border-2 border-gray-400 rounded-md'>Demo</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
