"use client"

import { TbArrowBigRightLines, TbChevronsRight, TbBrandGithub, TbBrandLinkedin, TbMail } from 'react-icons/tb'
import { FiFileText } from 'react-icons/fi'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Project from './components/project'
import SectionHeader from './components/sectionHeader'

export default function Home() {

  const [nav, setNav] = useState('fixed')
  const [scrollTop, setScrollTop] = useState(0)
  const [oldTop, setOldTop] = useState(0)

  const revealClass = "reveal relative translate-y-[150px] opacity-0 transition-all duration-200 ease-in"
  const activeClass = "active translate-y-0 opacity-1"

  useEffect(() => {
    const handleScroll = (event: Event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (oldTop >= scrollTop) {
      // scrolling up
      setNav('opacity-100 translate-y-4')
    } else {
      // scrolling down
      setNav('opacity-0 z-[-1]')
    }
    setOldTop(scrollTop)
  }, [scrollTop])

  useEffect(() => {
    const reveal = () => {
      var reveals = document.querySelectorAll(".reveal")
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight
        var elementTop = reveals[i].getBoundingClientRect().top
        var elementVisible = 200
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active")
          Array.from(reveals[i].children).forEach(child => {
            // setTimeout(() => {
            //   child.classList.add("reveal")
            //   child.classList.add("active")
            // }, 500)
          })
        } 
        // else {
        //   reveals[i].classList.remove("active")
        // }
      }
    }

    window.addEventListener("scroll", reveal)
    reveal()

    return () => {
      window.removeEventListener("scroll", reveal)
    }
  }, [])

  

  return (
    <main className='min-h-screen'>

      {/* FRONT PAGE */}

      <section className=''>
        <nav className={`fixed top-[-1rem] w-screen bg-black z-50 flex justify-between items-center py-4 px-6 ${nav} ${scrollTop == 0 ? 'shadow-none' : 'shadow-lg'} transition-all duration-300 ease-in-out`}>
          <h1 className='text-2xl font-semibold text-orange font-gloock'>MadeByIsaiah</h1>
          <ul className='flex items-center gap-4'>
            <li>
              <a href='https://docs.google.com/document/d/1oS3eGb4siIOyTOP9uHplK8lYOmD9bvKImNpqUeJ3Zf4/edit?usp=sharing' className='font-gloock tracking-wider border-2 border-orange px-2 py-2 rounded-md text-orange hover:bg-orange hover:bg-opacity-5 transition-all duration-200 ease-in-out'>
                RESUME
              </a>
            </li>
          </ul>
        </nav>
        <div className='reveal mt-[10rem] pl-[2.5rem] pr-[3rem] max-w-[1024px] lg:mx-auto'>
          <h2 className='my-2 text-lg text-orange'>Hey there, my name is</h2>
          <h1 className='text-4xl my-1 sm:text-5xl md:text-6xl text-white font-gloock'>Isaiah Aquino.</h1>
          <h1 className='text-4xl my-1 sm:text-5xl md:text-6xl text-blue-light font-gloock'>I build things for the web.</h1>
          <p className='my-5 text-lg text-blue-light max-w-lg'>I&apos;m an aspiring Full-Stack Web Developer with a hunger for expanding my knowledge and experience in creating clean and user friendly web experiences.</p>
        </div>
      </section>

      {/* ABOUT ME SECTION */}

      <section className='reveal left mt-[20rem] px-[2.5rem] max-w-[1024px] lg:mx-auto'>
        
        <SectionHeader title='About Me'/>
       
        <div className='max-w-[850px]'>
          <p className='text-blue-light text-lg my-4'>Hi! My name is Isaiah and I enjoy creating things that live on the internet. My interest in web development started back in 2008 when I decided to try editing custom Myspace themes. I didn&apos;t know at the time that I was learning to manipulate HTML and CSS. All I knew was that I loved doing it!</p>
          <p className='text-blue-light text-lg my-4'>Since then, the web continued to be a major part of my life. I went on to persue a Bachlor&apos;s Degree in Computer Science at <strong className='text-orange'>San Diego State University</strong>.</p>
          <p className='text-blue-light text-lg my-4'>If I&apos;m not at the beach enjoying the California surf or trying out new resturaunts and cafes with friends, I&apos;m usually on my computer working on various projects or learning about new frontend frameworks.</p>
          <p className='text-blue-light text-lg my-4'>Here are a few technologies I&apos;ve been working with recently:</p>
        </div>
        <ul className='text-white grid grid-cols-2 mx-4 my-4 max-w-[20rem]'>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            MongoDB
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
            Express
          </li>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            NodeJS
          </li>
        </ul>
      </section>

      {/* FEATURED PROJECTS SECTION */}

      <section className='reveal left mt-[10rem] px-[2.5rem] flex flex-col max-w-[1024px] lg:mx-auto'>

        <SectionHeader title='Things I&apos;ve Built' />

        <Project 
          orientation='left'
          title='Bug Splat'
          img='/bug_splat.png'
          desc={`Bug Splat is a full stack web-based bug tracking application powered by Next.JS, designed to streamline the process of identifying, reporting, and resolving software issues. This platform is dedicated to enhancing project management and collaboration, making it an essential tool for software development teams.`}
          stack={['React', 'Next.JS', 'TailwindCSS', 'MongoDB']}
          externalLink='https://bug-tracker-beta.vercel.app/'
          githubLink='https://github.com/isaiahaquino/bug-tracker'
        />
        
        <Project 
          orientation='right'
          title='Memories'
          img='/memories_project.png'
          desc='A Full Stack MERN Social Media App with integrated Authorization, Authentification, Pagination, and Search functionalities.'
          stack={['MongoDB', 'Express', 'React', 'NodeJS']}
          externalLink='https://memories-project-wine.vercel.app/posts'
          githubLink='https://github.com/isaiahaquino/memories-project'
        />
        <Project 
          orientation='left'
          title='Bladed By Yuzon'
          img='/bladedbyyuzon.png'
          desc='A modern, responsive, full stack business website with an integrated proprietary scheduling system. The app is built off the latest version of Next.js, and utilizes NextAuth to enable the admin to access the admin dashboard. The backbone of the website is built utilizing TypeScript.'
          stack={['React', 'Next.JS', 'TypeScript', 'TailwindCSS', 'NextAuth', 'Prisma']}
          externalLink='https://bladedbyyuzon.vercel.app/'
          githubLink='https://github.com/isaiahaquino/bladedbyyuzon'
        />
        <Project 
          orientation='right'
          title='Alpha Psi Rho'
          img='/alphapsirho.jpeg'
          desc='Designed and developed a modern website using Gatsby and Contentful. Standardized all output with a new, responsive, mobile-first approach.'
          stack={['React', 'Gatsby', 'Contentful']}
          externalLink='https://alphapsirhosdsu.gatsbyjs.io/'
          githubLink='https://github.com/isaiahaquino/sdsu-apsirho'
        />
        <Project 
          orientation='left'
          title='E-Commerce Website'
          img='/fakesurf.jpeg'
          desc='A Full Stack mock e-commerce website. Enables users to browse various item categories, create custom search queries, and the ability to add/remove items to their shopping cart.'
          stack={['React', 'Next.JS', 'TypeScript', 'TailwindCSS', 'PlanetScale', 'Prisma']}
          externalLink='https://fakesurf.vercel.app/'
          githubLink='https://github.com/isaiahaquino/fakesurfv2'
        />
        <Project 
          orientation='right'
          title='Worlde'
          img='/wordle.jpeg'
          desc={`Recreated the web based word game Worlde. Integrated similar design and animations to exhibit design-to-code skills.`}
          stack={['JavaScript', 'HTML', 'CSS']}
          externalLink='https://isaiahaquino.github.io/wordle-clone/'
          githubLink='https://github.com/isaiahaquino/wordle-clone'
        />
      </section>

      {/* PROJECTS IN PROGRESS */}

      <section  className='reveal left mt-[10rem] px-[2.5rem] flex flex-col max-w-[1024px] lg:mx-auto'>

        <SectionHeader title='Projects in Progress' />

        

      </section>

      {/* CONTACT SECTION */}

      <section className='reveal mt-[10rem] px-[2.5rem] flex flex-col items-center'>
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
