import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-cover bg-light-bg dark:bg-dark-bg dark:bg-cover dark:text-white'>
      {/* Navigation */}
      <h1 className='px-5 py-6 font-bold text-xl'>
        <span className='text-[#CD49C0] dark:text-[#58C55C]'>03</span> About Me
      </h1>

      {/* Description */}
      <div className='w-full flex flex-col justify-center items-center text-center'>
        <h2 className='font-bold mt-3 text-2xl pb-2'>Hi!</h2>
        <div className='flex justify-center items-center text-center w-full h-auto pt-8 text-base'>
          <p className='w-10/12 mx-auto'>
            As a highly motivated front-end web developer, I have revently honed my skills through completion
            of a coding bootcamp at LeWagon. I have a strong focus on user-centered design and a commitment to
            technical excellence, with exeprtise in HTML, Css, and Javascript. I approach each project with a
            proactive mindset, delivering results that are both functional and intuitive. Whether working
            independently or as part of a team, I bring a passion for continuous learning and improvement to my
            work, always striving to stay up-to-date with the latest web technologies. My goal is to create web
            experiences that are not only easy to use, but also make a lasting impact on the user. With my training
            at LeWagon, I am well-equipped to deliver results that exceed expectations.
          </p>
        </div>

        {/* Skills */}
        <div className='border-8 border-solid border-red-400 flex flex-wrap justify-center'>
            <img src="/public/Circle Buttons/Circle Buttons-02.png" alt="" className='w-96' />
            <img src="/public/Circle Buttons/Circle Buttons Black-06.png" alt="" className='w-80' />
            <img src="/public/Circle Buttons/Circle Buttons Black-05.png" alt="" className='w-96' />
            <img src="/public/Circle Buttons/Circle Buttons Black-04.png" alt="" className='w-96' />
            <img src="/public/Circle Buttons/Circle Buttons Black-01.png" alt="" className='w-96' />
            <img src="/public/Circle Buttons/Circle Buttons-03.png" alt="" className='w-96' />
            <img src="/public/Circle Buttons/Circle Buttons Black-08.png" alt="" className='w-96' />
        </div>
      </div>
    </div>
  )
}

export default About
