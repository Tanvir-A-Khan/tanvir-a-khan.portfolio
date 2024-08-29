import Link from 'next/link'
import React from 'react'

const Heading = () => {
  return (
    <div>
      <div className="h-52 bg-slate-600"></div>
      <div className="flex">
        <img
          src="prof.jfif"
          alt=""
          className="rounded-full w-32 md:w-48  mt-[-50px] md:mt-[-80px] md:ms-[60px] ms-[40px]"
        />
        <div className=" m-2 flex justify-between w-full">
          <div>
            <h1 className="text-4xl font-mono font-semibold">Tanvir Ahmed Khan</h1>
            <p>Brings ideas to life with code! ✨</p>
            <p>Associate Software Engineer @Kaz Software</p>
          </div>
          <div>
            <button
              type="button"
              className="px-2 me-48 mt-6 text-green-600 font-bold border-2 border-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all"
            >
              Follow
            </button>
          </div>
        </div>
      </div>
      <div>
        <nav>
          <ul className="flex gap-10 ps-20 pt-2 font-bold hover:*:text-green-600">
            <li> <Link href="/" > Home</Link></li>
            <li> <Link href="experiance" > Experiance</Link></li>
            <li> <Link href="skills" > Skills</Link></li>
            <li> <Link href="projects" > Projects</Link></li>
            <li> <Link href="achievements" > Achievements</Link></li>
            <li> <Link href="problem-solving" > Problem Solving</Link></li>
            <li> <Link href="participations" > Participation</Link></li>
            <li> <Link href="education" > Education</Link></li>
            <li> <Link href="about" > About</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Heading