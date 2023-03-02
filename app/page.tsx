import { MdOutlineDarkMode } from 'react-icons/md'
import { TbArrowBigRightLines, TbChevronsRight, TbBrandGithub, TbExternalLink } from 'react-icons/tb'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='min-h-screen'>
      <section>
        <nav className='flex justify-between items-center py-6 px-6'>
          <h1 className='text-2xl font-semibold text-orange'>ISAIAH AQUINO</h1>
          <ul className='flex items-center gap-4'>
            <li>
              <MdOutlineDarkMode size={30} color='white'/>
            </li>
            <li>
              <a href='#' className='border-2 border-orange px-2 py-2 rounded-xl text-orange hover:bg-orange hover:bg-opacity-10'>
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

      <section className='mt-[20rem] ml-[3rem] mr-[4rem]'>
        <div className='flex items-center my-10'>
          <TbArrowBigRightLines color='#ee6c4d' size={35}/>
          <h1 className='text-white flex-shrink-0 mx-2 font-bold text-2xl'>About Me</h1>
          <div className='h-[1px] w-full bg-white'></div>
        </div>
        <p className='text-blue-light text-lg my-4'>EDIT:Hello! My name is Isaiah and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
        <p className=' text-blue-light text-lg my-4s'>Here are a few technologies I've been working with recently:</p>
        <ul className='text-white grid grid-cols-2 mx-4 my-4'>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            Javascript (ES6+)
          </li>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            Typescript
          </li>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            ReactJS
          </li>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            NextJS
          </li>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            GatsbyJS
          </li>
          <li className='flex items-center gap-2'>
            <TbChevronsRight color='#ee6c4d' />
            Planetscale
          </li>
        </ul>
      </section>

      <section className='mt-[10rem] ml-[3rem] mr-[4rem]'>
        <div className='flex items-center my-10'>
          <TbArrowBigRightLines color='#ee6c4d' size={35}/>
          <h1 className='text-white flex-shrink-0 mx-2 font-bold text-2xl'>Things I've Built</h1>
          <div className='h-[1px] w-full bg-white'></div>
        </div>

        <div className='w-full bg-blue rounded my-10 drop-shadow-lg'>
          <div className='px-10 py-10'>
            <p className='text-orange'>Featured Project</p>
            <h1 className='text-white text-xl'>Alpha Psi Rho</h1>
            <p className='text-blue-light my-4'>Designed and developed a modern website using GatsbyJS and Contentful. Standardized all output with a new, responsive, mobile-first approach.</p>
            <ul className='text-blue-light flex gap-3'>
              <li>GatsbyJS</li>
              <li>Contentful</li>
            </ul>
            <ul className='my-4 flex gap-3'>
              <li>
                <Link href='https://github.com/isaiahaquino/sdsu-apsirho'>
                  <TbBrandGithub color='white' size={30} />
                </Link>
              </li>
              <li>
                <Link href='https://alphapsirhosdsu.gatsbyjs.io/'>
                  <TbExternalLink color='white' size={30} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full bg-blue rounded my-10 drop-shadow-lg'>
          <div className='px-10 py-10'>
            <p className='text-orange'>Featured Project</p>
            <h1 className='text-white text-xl'>E-commerce Website</h1>
            <p className='text-blue-light my-4'>Designed and developed a modern website using GatsbyJS and Contentful. Standardized all output with a new, responsive, mobile-first approach.</p>
            <ul className='text-blue-light flex gap-3'>
              <li>NextJS</li>
              <li>TailwindCSS</li>
              <li>Planetscale</li>
              <li>Prisma</li>
            </ul>
            <ul className='my-4 flex gap-3'>
              <li>
                <Link href='https://github.com/isaiahaquino/fakesurfv2'>
                  <TbBrandGithub color='white' size={30} />
                </Link>
              </li>
              <li>
                <Link href='https://fakesurf.vercel.app/'>
                  <TbExternalLink color='white' size={30} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full bg-blue rounded my-10 drop-shadow-lg'>
          <div className='px-10 py-10'>
            <p className='text-orange'>Featured Project</p>
            <h1 className='text-white text-xl'>Worlde Clone</h1>
            <p className='text-blue-light my-4'>Designed and developed a modern website using GatsbyJS and Contentful. Standardized all output with a new, responsive, mobile-first approach.</p>
            <ul className='text-blue-light flex gap-3'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <ul className='my-4 flex gap-3'>
              <li>
                <Link href='https://github.com/isaiahaquino/wordle-clone'>
                  <TbBrandGithub color='white' size={30} />
                </Link>
              </li>
              <li>
                <Link href='https://isaiahaquino.github.io/wordle-clone/'>
                  <TbExternalLink color='white' size={30} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='mt-[10rem] ml-[3rem] mr-[4rem] flex flex-col items-center'>
        <div className='flex items-center text-orange gap-2'>
          <TbArrowBigRightLines color='#ee6c4d' size={15}/>
          <p>Like what you see?</p>
        </div>
        <h1 className='text-4xl text-white my-4'>Contact Me</h1>
        <p className='text-center text-blue-light'>I’m currently looking for new opportunities as a Front-end Developer, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <a className='mt-10 px-6 py-4 border-2 border-orange text-orange rounded-md hover:bg-orange hover:bg-opacity-10' href='mailto: isaiahaquino1997@gmail.com'>Say Hello</a>
      </section>


      <section className='mt-[10rem]'>
        <footer className='text-sm w-screen text-center my-6 text-blue-light hover:text-orange tracking-widest'>
          <Link href='https://github.com/isaiahaquino/react-portfolio'>Built by Isaiah Aquino</Link>
        </footer>
      </section>
    </main>
  )
}
