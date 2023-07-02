import React from 'react'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import TechCard from './TechCard'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center  '>
      {technologies.map((technology) => (
        <div className='w-20 h-20 m-5' key={technology.name}>
          <TechCard name={technology.name} icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')