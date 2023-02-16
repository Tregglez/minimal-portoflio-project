import React, { useContext } from 'react'
import { ThemeContext } from '../App';

const About = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);


  const circleButton1 = theme === 'light' ? '/Circle Buttons/html.png' : '/Circle Buttons/light-html.png';
  const circleButton2 = theme === 'light' ? '/Circle Buttons/css.png' : '/Circle Buttons/light-css.png';
  const circleButton3 = theme === 'light' ? '/Circle Buttons/js.png' : '/Circle Buttons/light-js.png';
  const circleButton4 = theme === 'light' ? '/Circle Buttons/rails.png' : '/Circle Buttons/light-rails.png';
  const circleButton5 = theme === 'light' ? '/Circle Buttons/react.png' : '/Circle Buttons/light-react.png';
  const circleButton6 = theme === 'light' ? '/Circle Buttons/rd.png' : '/Circle Buttons/light-rd.png';
  const circleButton7 = theme === 'light' ? '/Circle Buttons/sql.png' : '/Circle Buttons/light-sql.png';

  return (
    <div className="w-full bg-cover bg-light-bg dark:bg-dark-bg dark:bg-cover dark:text-white">
      {/* Navigation */}
      <h1 className="px-5 py-6 font-bold text-xl fixed">
        <a href="/" style={{ display: "inline-block" }}>
          <p className="mr-0 mb-0 text-[#CD49C0] dark:text-[#58C55C]">
            <span className='text-black dark:text-white'>Home</span> //
          </p>
        </a>
        <span
          className="text-[#CD49C0] dark:text-[#58C55C]"
          style={{ display: "inline-block", margin: "0 0 0 5px", padding: "0" }}
        >
          03
        </span>{" "}
        About
      </h1>



      {/* Description */}
      <div className='w-full flex flex-col justify-center items-center text-center bg-cover bg-light-bg dark:bg-dark-bg dark:bg-cover dark:text-white'>
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
        <div className='flex flex-wrap justify-center mt-10 mx-24'>
          <img src={circleButton1} alt="" className='circle-image sm-screen' />
          <img src={circleButton2} alt="" className='circle-image sm-screen' />
        </div>
        <div className='flex flex-wrap justify-center'>
          <img src={circleButton3} alt="" className='circle-image sm-screen' />
          <img src={circleButton4} alt="" className='circle-image sm-screen' />
          <img src={circleButton5} alt="" className='circle-image sm-screen' />
        </div>
        <div className='flex flex-wrap justify-center mb-10 mx-24'>
          <img src={circleButton6} alt="" className='circle-image sm-screen' />
          <img src={circleButton7} alt="" className='circle-image sm-screen' />
        </div>

        {/* Contact Me */}
        <div className='flex flex-col mb-10 mx-auto w-full bg-cover bg-light-bg dark:bg-dark-bg dark:bg-cover dark:text-white'>
          <div className='flex justify-center items-center'>
            <form
              action="https://getform.io/f/ed64f096-ee74-402e-8275-6b5ec255d6eb"
              method='POST'
              className='flex flex-col w-full md:w-7/12'
              >
              <input
                type="text"
                name='name'
                placeholder='Name'
                className='p-2 w-full border-2 rounded-md focus:outline-none border-gray-300 border-solid'
                />
              <input
                type="text"
                name='email'
                placeholder='Email'
                className='my-2 p-2 border-2 rounded-md focus:outline-none border-gray-300 border-solid'
                />
              <textarea
                name="message"
                placeholder="Message"
                rows="10"
                className='p-2 mb-4 border-2 rounded-md focus:outline-none border-gray-300 border-solid'
                />
              <button
                type='submit'
                className='text-center inline-block px-8 py-3 w-full mb-8 text-base font-medium rounded-md bg-white
                border-gray-300 border-solid border-2 text-gray-500'
                >
                Work With Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
