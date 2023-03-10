import Link from "next/link"
import Image from "next/image"
import { TbBrandGithub, TbExternalLink } from "react-icons/tb"

export default function Project({ orientation, title, img, desc, stack, externalLink, githubLink }) {
  return (
    <div className='w-full md:h-[25rem] rounded my-10 drop-shadow-lg relative'>
      <Link href={`${externalLink}`}  className={`h-full w-full md:w-[30rem] md:h-[20rem] absolute md:right-0 md:bottom-0 lg:h-[24rem] lg:w-[40rem] ${orientation == 'right' ? 'lg:left-0' : ''} hover:z-20 hover:scale-105 transition-all duration-300 ease-in-out`}>
        <Image src={`${img}`} alt='' fill className='object-cover rounded'/>
      </Link>
      <div className={`px-10 py-10 z-10 bg-black md:bg-opacity-90 relative md:w-[30rem] opacity-90 rounded ${orientation == 'right' ? 'md:absolute lg:right-0 lg:text-right' : ''}`}>
        <h1 className='text-orange text-xl md:text-2xl'>{title}</h1>
        <p className='text-white my-4'>{desc}</p>
        <ul className={`text-blue-light flex flex-wrap text-sm gap-x-2 ${orientation == 'right' ? 'lg:justify-end' : ''}`}>
          {stack.map((element, index) => {
            return <li key={index}>{element}</li>
          })}
        </ul>
        <ul className={`my-4 flex gap-3 ${orientation == 'right' ? 'lg:justify-end' : ''}`}>
          <li>
            <Link href={`${githubLink}`}  className='text-blue-light hover:text-orange transition-all duration-200 ease-in-out'>
              <TbBrandGithub size={25} />
            </Link>
          </li>
          <li>
            <Link href={`${externalLink}`}  className='text-blue-light hover:text-orange transition-all duration-200 ease-in-out'>
              <TbExternalLink size={25} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}