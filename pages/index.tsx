import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import { motion } from 'framer-motion'
import AnimatedLine from '../components/AnimatedLine'
import AnimatedGrid from '../components/AnimatedGrid'

const appear = {
  hidden: { opacity: 0, y: '20%'},
  visible: { opacity: 1, y: 0, 
    transition: {
      duration: .5,
      ease: [0, 0, .8, 1]
    }
  }
}

export default function Home() {
  const title = ""
  const subtitle = ""

  return (
    <Layout title="Home" description={`${title} - ${subtitle}`} bg="gray-900">
      <div className='mt-8'>
        <AnimatedText line1='Capturing the' line2='Bigger Picture' />
      </div>
      <AnimatedLine delay={.7} />
      <AnimatedGrid>
        <motion.div 
          className='col-span-4 font-sans font-light'
          variants={appear}
        >
          <p className='text-gray-400 text-base'>
            <span className='text-purple-400 text-lg'>/</span> Reel
          </p>
          <p className='text-2xl mt-4'>
            Cinematography Reel 2021
          </p>
        </motion.div>
        <motion.div 
          className='col-span-4 font-sans font-light'
          variants={appear}
        >
          <p className='text-gray-400 text-base'>
            <span className='text-purple-400 text-lg'>/</span> A year in review
          </p>
          <p className='text-lg mt-4'>
            A quick recap of some of my favorite projects over the course of 2021. From music videos to shortfilms, professional to passion projects, these artists and actors made 2021 the best year yet.
          </p>
        </motion.div>
        <motion.div 
          className='col-span-3 font-sans font-light w-[fit-content] justify-self-center'
          variants={appear}
        >
          <p className='text-lg mt-4 border-b-2 border-purple-400'>
            Watch Video
          </p>
        </motion.div>
        <motion.div 
          className='hidden md:block col-span-1 font-sans font-light col-start-12'
          variants={appear}
        >
          <p className='text-gray-400 text-sm rotate-90 whitespace-nowrap mt-8'>
            <span className='text-purple-400 text-base'>/</span> Featured Project
          </p>
        </motion.div>
      </AnimatedGrid>
    </Layout>
  )
}
