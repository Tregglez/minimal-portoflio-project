import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-cover bg-light-bg dark:bg-dark-bg dark:bg-cover dark:text-white'>

      {/* Text in Center */}
      <div className='flex flex-col justify-center text-center'>
        <h2 className='font-bold'>
          Hello! I'm <span className='text-[#CD49C0] dark:text-[#58C55C]'>Benjamin Treglown</span>
        </h2>
        <h2 className='font-bold'>
          and I'm a Front-end Develeper base in
          <span className='indent'> Melbourne, Australia.</span>
        </h2>

        {/* Links */}
        <div className='flex justify-between pt-10 w-full'>

          <a href="/about">
            <p className='underline underline-offset-8 lg:px-4'>About Me</p>
          </a>

          <a href="/projects">
            <p className='underline underline-offset-8 lg:px-4'>Projects</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
