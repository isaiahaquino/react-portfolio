import { TbArrowBigRightLines } from "react-icons/tb"

interface Section {
  title: string;
}

export default function SectionHeader(props:Section) {
  return (
    <div className='flex items-center my-10 max-w-3xl'>
      <TbArrowBigRightLines className='shrink-0 grow-0' color='#ee6c4d' size={20}/>
      <h1 className='text-white flex-shrink-0 mx-2 font-bold text-2xl font-gloock'>{props.title}</h1>
      <div className='h-[1px] w-full bg-blue'></div>
    </div>
  )
}