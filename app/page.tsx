import { TbArrowBigRightLines, TbChevronsRight, TbBrandGithub, TbBrandLinkedin, TbExternalLink, TbMail } from 'react-icons/tb'
import { FiFileText } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen'>

      {/* FRONT PAGE */}

      <section>
        <nav className='flex justify-between items-center py-6 px-6'>
          <h1 className='text-2xl font-semibold text-orange'>ISAIAH AQUINO</h1>
          <ul className='flex items-center gap-4'>
            <li>
              <a href='https://docs.google.com/document/d/1oS3eGb4siIOyTOP9uHplK8lYOmD9bvKImNpqUeJ3Zf4/edit?usp=sharing' className='border-2 border-orange px-2 py-2 rounded-xl text-orange hover:bg-orange hover:bg-opacity-10'>
                RESUME
              </a>
            </li>
          </ul>
        </nav>
        <div className='mt-[10rem] ml-[3rem] mr-[5rem]'>
          <h2 className='my-5 text-lg text-orange'>Hey there, my name is</h2>
          <h1 className='text-4xl my-1 text-white'>Isaiah Aquino.</h1>
          <h1 className='text-4xl my-1 text-blue-light'>I build things for the web.</h1>
          <p className='my-5 text-lg text-blue-light'>I am aspiring Front-end Javascript developer with a hunger for expanding my knowledge and experience in creating clean and user friendly web experiences.</p>
        </div>
      </section>

      {/* ABOUT ME SECTION */}

      <section className='mt-[20rem] ml-[3rem] mr-[4rem]'>
        <div className='flex items-center my-10'>
          <TbArrowBigRightLines color='#ee6c4d' size={30}/>
          <h1 className='text-white flex-shrink-0 mx-2 font-bold text-2xl'>About Me</h1>
          <div className='h-[1px] w-full bg-white'></div>
        </div>
        <p className='text-blue-light text-lg my-4'>Hi! My name is Isaiah and I enjoy creating things that live on the internet. My interest in web development started back in 2008 when I decided to try editing custom Myspace themes — I didn&apos;t know at the time that I was learning to manipulate HTML and CSS, all I knew was that I loved doing it!</p>
        <p className='text-blue-light text-lg my-4'>Since then, the web continued to be a major part of my life. I went on to persue a Bachlor&apos;s Degree in Computer Science at <strong className='text-orange'>San Diego State University</strong>.</p>
        <p className='text-blue-light text-lg my-4'>If I&apos;m not at the beach enjoying the California surf or trying out new resturaunts and cafes with friends, I&apos;m usually on my computer working on various projects or simply just learning about new frontend frameworks.</p>
        <p className=' text-blue-light text-lg my-4s'>Here are a few technologies I&apos;ve been working with recently:</p>
        <ul className='text-white grid grid-cols-2 mx-4 my-4'>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            Javascript
          </li>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            Typescript
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

      <section className='mt-[10rem] ml-[3rem] mr-[4rem]'>
        <div className='flex items-center my-10'>
          <TbArrowBigRightLines color='#ee6c4d' size={55}/>
          <h1 className='text-white flex-shrink-0 mx-2 font-bold text-2xl'>Things I&apos;ve Built</h1>
          <div className='h-[1px] w-full bg-white'></div>
        </div>

        <div className='w-full rounded my-10 drop-shadow-lg relative'>
          <Image src='/alphapsirho.jpeg' alt='alphapsirho screenshot' fill className='object-cover rounded'/>
          <div className='px-10 py-10 z-10 bg-black relative opacity-90'>
            <p className='text-orange'>Featured Project</p>
            <h1 className='text-white text-xl'>Alpha Psi Rho</h1>
            <p className='text-blue-light my-4'>Designed and developed a modern website using Gatsby and Contentful. Standardized all output with a new, responsive, mobile-first approach.</p>
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
        <div className='w-full rounded my-10 drop-shadow-lg relative'>
          <Image src='/fakesurf.jpeg' alt='fakesurf screenshot' fill className='object-cover rounded'/>
          <div className='px-10 py-10 z-10 bg-black relative opacity-90'>
            <p className='text-orange'>Featured Project</p>
            <h1 className='text-white text-xl'>E-commerce Website</h1>
            <p className='text-blue-light my-4'>Designed and developed a modern website using GatsbyJS and Contentful. Standardized all output with a new, responsive, mobile-first approach.</p>
            <ul className='text-blue-light text-sm flex gap-x-2 flex-wrap'>
              <li>React</li>
              <li>Next.JS</li>
              <li>TailwindCSS</li>
              <li>Planetscale</li>
              <li>Prisma</li>
              <li>Vercel</li>
            </ul>
            <ul className='my-4 flex gap-3'>
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
        <div className='w-full rounded my-10 drop-shadow-lg relative'>
          <Image src='/wordle.jpeg' alt='wordle screenshot' fill className='object-cover rounded'/>
          <div className='px-10 py-10 z-10 bg-black relative opacity-90'>
            <p className='text-orange'>Featured Project</p>
            <h1 className='text-white text-xl'>Wordle Clone</h1>
            <p className='text-blue-light my-4'>Designed and developed a modern website using GatsbyJS and Contentful. Standardized all output with a new, responsive, mobile-first approach.</p>
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

      <section className='mt-[10rem] ml-[3rem] mr-[4rem] flex flex-col items-center'>
        <div className='flex items-center text-orange gap-2'>
          <TbArrowBigRightLines color='#ee6c4d' size={15}/>
          <p>Like what you see?</p>
        </div>
        <h1 className='text-4xl text-white my-4'>Contact Me</h1>
        <p className='text-center text-blue-light'>I&apos;m currently looking for new opportunities as a Front-end Developer, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <a className='mt-10 px-6 py-4 border-2 border-orange text-orange rounded-md hover:bg-orange hover:bg-opacity-10' href='mailto: isaiahaquino1997@gmail.com'>Say Hello</a>
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
