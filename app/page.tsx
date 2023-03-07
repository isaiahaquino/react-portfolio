"use client"

import { TbArrowBigRightLines, TbChevronsRight, TbBrandGithub, TbBrandLinkedin, TbExternalLink, TbMail } from 'react-icons/tb'
import { FiFileText } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
import { WheelEvent, useState } from 'react'

export default function Home() {

  const [nav, setNav] = useState('fixed')
  
  function handleWheelEvent(event: WheelEvent<HTMLDivElement>) {
    if (event.deltaY < 0) {
      // scrolling up
      setNav('opacity-100 translate-y-4')
    } else if (event.deltaY > 0) {
      // scrolling down
      setNav('opacity-0 z-[-1]')
    }
  }

  return (
    <main className='min-h-screen' onWheel={handleWheelEvent}>

      {/* FRONT PAGE */}

      <section>
        <nav className={`fixed top-[-1rem] w-screen bg-black shadow-lg z-50 flex justify-between items-center py-4 px-6 ${nav} transition-all duration-300 ease-in-out`}>
          <h1 className='text-2xl font-semibold text-orange font-gloock'>MadeByIsaiah</h1>
          <ul className='flex items-center gap-4'>
            <li>
              <a href='https://docs.google.com/document/d/1oS3eGb4siIOyTOP9uHplK8lYOmD9bvKImNpqUeJ3Zf4/edit?usp=sharing' className='font-gloock tracking-wider border-2 border-orange px-2 py-2 rounded-md text-orange hover:bg-orange hover:bg-opacity-5 transition-all duration-200 ease-in-out'>
                RESUME
              </a>
            </li>
          </ul>
        </nav>
        <div className='mt-[10rem] ml-[2.5rem] mr-[3rem] max-w-[1024px] lg:mx-auto'>
          <h2 className='my-2 text-lg text-orange'>Hey there, my name is</h2>
          <h1 className='text-4xl my-1 sm:text-5xl md:text-6xl text-white font-gloock'>Isaiah Aquino.</h1>
          <h1 className='text-4xl my-1 sm:text-5xl md:text-6xl text-blue-light font-gloock'>I build things for the web.</h1>
          <p className='my-5 text-lg text-blue-light max-w-lg'>I&apos;m an aspiring Front-end Javascript developer with a hunger for expanding my knowledge and experience in creating clean and user friendly web experiences.</p>
        </div>
      </section>

      {/* ABOUT ME SECTION */}

      <section className='mt-[20rem] mx-[2.5rem] max-w-[1024px] lg:mx-auto'>
        <div className='flex items-center my-10 max-w-3xl'>
          <TbArrowBigRightLines className='shrink-0 grow-0' color='#ee6c4d' size={20}/>
          <h1 className='text-white flex-shrink-0 mx-2 font-bold text-2xl font-gloock'>About Me</h1>
          <div className='h-[1px] w-full bg-blue'></div>
        </div>
        <div className='max-w-[850px]'>
          <p className='text-blue-light text-lg my-4'>Hi! My name is Isaiah and I enjoy creating things that live on the internet. My interest in web development started back in 2008 when I decided to try editing custom Myspace themes. I didn&apos;t know at the time that I was learning to manipulate HTML and CSS. All I knew was that I loved doing it!</p>
          <p className='text-blue-light text-lg my-4'>Since then, the web continued to be a major part of my life. I went on to persue a Bachlor&apos;s Degree in Computer Science at <strong className='text-orange'>San Diego State University</strong>.</p>
          <p className='text-blue-light text-lg my-4'>If I&apos;m not at the beach enjoying the California surf or trying out new resturaunts and cafes with friends, I&apos;m usually on my computer working on various projects or learning about new frontend frameworks.</p>
          <p className=' text-blue-light text-lg my-4s'>Here are a few technologies I&apos;ve been working with recently:</p>
        </div>
        <ul className='text-white grid grid-cols-2 mx-4 my-4 max-w-[20rem]'>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            JavaScript
          </li>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            TypeScript
          </li>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            React
          </li>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            Next.JS
          </li>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            Gatsby
          </li>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            TailwindCSS
          </li>
        </ul>
      </section>

      {/* FEATURED PROJECTS SECTION */}

      <section className='mt-[10rem] mx-[2.5rem] flex flex-col max-w-[1024px] lg:mx-auto'>
        <div className='flex items-center my-10 max-w-3xl'>
          <TbArrowBigRightLines className='shrink-0 grow-0' color='#ee6c4d' size={20}/>
          <h1 className='text-white flex-shrink-0 mx-2 font-bold text-2xl font-gloock'>Things I&apos;ve Built</h1>
          <div className='h-[1px] w-full bg-blue'></div>
        </div>

        <div className='w-full md:h-[25rem] rounded my-10 drop-shadow-lg relative'>
          <Link href='https://alphapsirhosdsu.gatsbyjs.io/'  className='h-full w-full md:w-[30rem] md:h-[20rem] absolute md:right-0 md:bottom-0 lg:h-[24rem] lg:w-[40rem] hover:z-20 hover:scale-105 transition-all duration-300 ease-in-out'>
            <Image src='/alphapsirho.jpeg' alt='alphapsirho screenshot' fill className='object-cover rounded'/>
          </Link>
          <div className='px-10 py-10 z-10 bg-black md:bg-opacity-90 relative md:w-[30rem] opacity-90 rounded'>
            <h1 className='text-orange text-xl md:text-2xl'>Alpha Psi Rho</h1>
            <p className='text-white my-4'>Designed and developed a modern website using Gatsby and Contentful. Standardized all output with a new, responsive, mobile-first approach.</p>
            <ul className='text-blue-light flex text-sm gap-3'>
              <li>React</li>
              <li>Gatsby</li>
              <li>Contentful</li>
            </ul>
            <ul className='my-4 flex gap-3'>
              <li>
                <Link href='https://github.com/isaiahaquino/sdsu-apsirho'  className='text-blue-light hover:text-orange transition-all duration-200 ease-in-out'>
                  <TbBrandGithub size={25} />
                </Link>
              </li>
              <li>
                <Link href='https://alphapsirhosdsu.gatsbyjs.io/'  className='text-blue-light hover:text-orange transition-all duration-200 ease-in-out'>
                  <TbExternalLink size={25} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full md:h-[25rem] rounded my-10 drop-shadow-lg relative'>
          <Link href='https://fakesurf.vercel.app/' className='h-full w-full md:w-[30rem] md:h-[20rem] absolute md:right-0 md:bottom-0 lg:h-[24rem] lg:w-[40rem] lg:left-0 hover:z-20 hover:scale-105 transition-all duration-300 ease-in-out'>
            <Image src='/fakesurf.jpeg' alt='fakesurf screenshot' fill className='object-cover rounded'/>
          </Link>
          <div className='px-10 py-10 z-10 bg-black md:bg-opacity-90 relative md:absolute lg:right-0 md:w-[30rem] opacity-90 rounded lg:text-right'>
            <h1 className='text-orange text-xl md:text-2xl'>E-commerce Website</h1>
            <p className='text-white my-4'>A Full Stack mock e-commerce website. Enables users to browse various item categories, create custom search queries, and the ability to add/remove items to their shopping cart.</p>
            <ul className='text-blue-light text-sm flex gap-x-2 flex-wrap lg:justify-end'>
              <li>React</li>
              <li>Next.JS</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>Planetscale</li>
              <li>Prisma</li>
            </ul>
            <ul className='my-4 flex gap-3 lg:justify-end'>
              <li>
                <Link href='https://github.com/isaiahaquino/fakesurfv2'  className='text-blue-light hover:text-orange transition-all duration-200 ease-in-out'>
                  <TbBrandGithub size={25} />
                </Link>
              </li>
              <li>
                <Link href='https://fakesurf.vercel.app/'  className='text-blue-light hover:text-orange transition-all duration-200 ease-in-out'>
                  <TbExternalLink size={25} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full md:h-[25rem] rounded my-10 drop-shadow-lg relative'>
          <Link href='https://isaiahaquino.github.io/wordle-clone/' className='h-full w-full md:w-[30rem] md:h-[20rem] absolute md:right-0 md:bottom-0 lg:h-[24rem] lg:w-[40rem] hover:z-20 hover:scale-105 transition-all duration-300 ease-in-out'>
            <Image src='/wordle.jpeg' alt='wordle screenshot' fill className='object-cover rounded'/>
          </Link>
          <div className='px-10 py-10 z-10 bg-black md:bg-opacity-90 relative lg:right-0 md:w-[30rem] opacity-90 rounded'>
            <h1 className='text-orange text-xl md:text-2xl'>Wordle Clone</h1>
            <p className='text-white my-4'>Recreated the web based word game <Link className='text-orange' href='https://www.nytimes.com/games/wordle/index.html'>Worlde</Link>. Integrated similar design and animations to exhibit design-to-code skills.</p>
            <ul className='text-blue-light flex gap-x-2 text-sm'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <ul className='my-4 flex gap-3'>
              <li>
                <Link href='https://github.com/isaiahaquino/wordle-clone' className='text-blue-light hover:text-orange transition-all duration-200 ease-in-out'>
                  <TbBrandGithub size={25} />
                </Link>
              </li>
              <li>
                <Link href='https://isaiahaquino.github.io/wordle-clone/' className='text-blue-light hover:text-orange transition-all duration-200 ease-in-out'>
                  <TbExternalLink size={25} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className='mt-[10rem] mx-[2.5rem] flex flex-col items-center'>
        <div className='flex items-center text-orange gap-2'>
          <TbArrowBigRightLines color='#ee6c4d' size={15}/>
          <p>Like what you see?</p>
        </div>
        <h1 className='text-4xl text-white my-4 font-gloock'>Contact Me</h1>
        <p className='text-center text-blue-light max-w-xl'>I&apos;m currently looking for new opportunities as a Front-end Developer, Software Engineer, or Full-stack Developer. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
        <a className='mt-10 px-6 py-4 border-2 border-orange text-orange rounded-md hover:bg-orange hover:bg-opacity-5 transition-all duration-200 ease-in-out' href='mailto: isaiahaquino1997@gmail.com'>Say Hello</a>
      </section>

      {/* FOOTER SECTION */}

      <section className='mt-[10rem]'>
        <div>
          <ul className='flex justify-center items-center gap-5'>
            <li className='hover:translate-y-[-0.1rem] transition-all duration-200 ease-in-out'>
              <Link href='https://www.linkedin.com/in/isaiahaquino/' className='text-blue-light hover:text-orange transition-all duration-200 ease-in-out'>
                <TbBrandLinkedin size={27}/>
              </Link>
            </li>
            <li className='hover:translate-y-[-0.1rem] transition-all duration-200 ease-in-out'>
              <Link href='https://github.com/isaiahaquino' className='text-blue-light hover:text-orange transition-all duration-200 ease-in-out'>
                <TbBrandGithub size={25}/>
              </Link>
            </li>
            <li className='hover:translate-y-[-0.1rem] transition-all duration-200 ease-in-out'>
              <Link href='https://docs.google.com/document/d/1oS3eGb4siIOyTOP9uHplK8lYOmD9bvKImNpqUeJ3Zf4/edit?usp=sharing' className='text-blue-light hover:text-orange transition-all duration-200 ease-in-out'>
                <FiFileText size={23}/>
              </Link>
            </li>
            <li className='hover:translate-y-[-0.1rem] transition-all duration-200 ease-in-out'>
              <Link href='mailto: isaiahaquino1997@gmail.com' className='text-blue-light hover:text-orange transition-all duration-200 ease-in-out'>
                <TbMail size={27}/>
              </Link>
            </li>
          </ul>
        </div>

        <footer className='text-sm w-screen text-center my-6 text-blue-light hover:text-orange tracking-widest  transition-all duration-200 ease-in-out'>
          <Link href='https://github.com/isaiahaquino/react-portfolio'>Built by Isaiah Aquino</Link>
        </footer>
      </section>
    </main>
  )
}
