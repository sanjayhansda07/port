import { motion } from 'framer-motion'
import React from 'react'
import { styles, mainColor } from '../styles'
import './Hero.css'
import { SectionWrapper } from "../hoc";
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
const Hero = () => {
  return (
    <section style={{ height: '100vh', marginTop: '-50px' }} className='relative w-full h-screen mx-auto'>

      < div className={`${styles.heroHeadText} relative text-white  p-2`}>
        <div className='absolute heroContent text-left'>
          <h1 > <span className={`hover:text-[gray]`} >Hi, I'm </span> <span className={`text-[${mainColor}] hover:text-[gray]`}>Shishir</span></h1>
          <p className={`${styles.heroSubText} text-secondary`}>
            I develop user
            interfaces and web applications
          </p>

          <div className={`header__socials `}>
            <a className={`text-[${mainColor}]`} href="https://www.linkedin.com/in/shishir-chaurasiya/" target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
            <a className='instagram' href="https://www.instagram.com/_shishir435/" target='_blank' rel="noopener noreferrer"><BsInstagram /></a>
            <a className='text-white' href="https://github.com/Shishir435" target='_blank' rel="noopener noreferrer"><BsGithub /></a>
          </div>
        </div>
      </div >

      <div style={{ zIndex: '15' }} className='absolute top-[82vh]   w-full flex justify-center cursor-pointer items-center '>
        <a href="#works">
          <div className={`w-[35px] h-[64px] rotate-90 rounded-3xl border-4 border-[#0056d2] hover:scale-125 flex justify-center cursor-pointer items-start `}
          >
            <motion.div animate={{
              y: [0, 20, 0]
            }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className={`w-3 h-3 rounded-full bg-[#0056d2]`}>

            </motion.div>
          </div>
        </a>
      </div>
    </section >
  )
}

export default SectionWrapper(Hero, "#")