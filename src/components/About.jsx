
import { useTypewriter } from 'react-simple-typewriter'
import animation from '../assets/Animation (1)..json'
import Lottie from 'lottie-react'

export default function About() {
  const style = {
    height: 600,
  };
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Ui/Ux Designer', 'Graphic Designer'],
    loop: 0
  })

  return (
    <section id="about" className="h-screen flex items-center justify-center -mt-10">
      <div className="flex space-x-3 lg:mb-16 md:mb-10 sm:mb-4">

        <div className="container sm:text-center md:text-center flex-col items-start flex-1 lg:text-left ">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-7 text-slate-400">
            Hi! I am <span className="lg:text-6xl md:text-5xl text-4xl text-white">Shivam</span>
            <br />
            and I am a
            <br />
            <span className="lg:text-6xl md:text-5xl text-4xl text-white">
              {text}
            </span>
          </h1>

          <p className="sm:text-lg lg:text-2xl text-slate-300 mx-4 sm:mx-0">
          Detail-oriented, organised and meticulous person. Works at fast pace to meet tight deadlines. Enthusiastic team player ready to contribute to company success. Complex problem-solver with analytical and driven mindset.
          </p>
          <div className="flex items-center space-x-3 text-center font-medium mt-7 text-lg ">
            <a
              className="inline-block w-auto min-w-[250px] px-6 py-4  text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-b dark:shadow-indigo-900 shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-400 hover:-translate-y-px "
              href="#projects">My Projects
            </a>
            <a className="inline-block w-auto min-w-[250px] px-6 py-4  text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-500 hover:text-white shadow-slate-300 dark:shadow-slate-700 hover:shadow-2xl hover:shadow-slate-400 hover:-translate-y-px"
              href="#skills">My Skills
            </a>
          </div>

        </div>

        <div className="hidden sm:hidden md:hidden lg:flex flex-1 items-center md:flex-row">
          <Lottie animationData={animation} style={style} className="absolute ml-14 -mt-44 " />
        </div>


      </div>

    </section>
  )
}
