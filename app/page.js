import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className='min-h-screen'>
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className='text-xl font-mono'>developedbynadia</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
            </li>
            <li><a className="bg-gradient-to-r from-pink-500 to-purple-500  text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text5xl py-2 text-purple-700 font-medium'>Nadia Schmidtke</h2>
          <h3 className='text-2xl py-2'>Developer and Intern Technical Writer</h3>
          <p className='text-md py-f leading-8 text-gray-800'>
            Find me on Twitter, LinkedIn and GitHub
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 text-gray-600'>
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
          <AiFillGithub/>
        </div>
        <div></div>
      </section>
    </main>
  )
}
