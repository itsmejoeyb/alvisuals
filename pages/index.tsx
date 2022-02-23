import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import { motion } from 'framer-motion'
import AnimatedLine from '../components/AnimatedLine'
import AnimatedGrid from '../components/AnimatedGrid'
import { useLayoutEffect, useRef, useState } from 'react'
import Line from '../components/Line'
import Grid from '../components/Grid'
import ProjectSummary from '../components/ProjectSummary'

const appear = {
    hidden: { opacity: 0, y: '20%' },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0, 0, 0.8, 1],
        },
    },
}

const Home = () => {
    const title = ''
    const subtitle = ''
    const featured = useRef<HTMLDivElement>(null)
    const [margin, setMargin] = useState(0)

    const fixMargin = (el: HTMLElement) => {
        setMargin(-el.getBoundingClientRect().left)
    }

    useLayoutEffect(() => {
        if(featured !== null) {
            //@ts-ignore
            fixMargin(featured.current)
        }
    }, [])

    return (
        <Layout title="Home" description={`${title} - ${subtitle}`}>
            <div className="pt-8">
                <AnimatedText line1="Capturing the" line2="Bigger Picture" />
            </div>
            <AnimatedLine delay={0.7} emoji="🎥" />
            <AnimatedGrid>
                <motion.div
                    className="col-span-4 font-sans font-light"
                    variants={appear}
                >
                    <p className="text-base text-gray-400">
                        <span className="text-lg text-purple-400">/</span> Reel
                    </p>
                    <p className="mt-4 text-2xl">Cinematography Reel 2021</p>
                </motion.div>
                <motion.div
                    className="col-span-4 font-sans font-light"
                    variants={appear}
                >
                    <p className="text-base text-gray-400">
                        <span className="text-lg text-purple-400">/</span> A year in review
                    </p>
                    <p className="mt-4 text-lg">
                        A quick recap of some of my favorite projects over the course of
                        2021. From music videos to shortfilms, professional to passion
                        projects, these artists and actors made 2021 the best year yet.
                    </p>
                </motion.div>
                <motion.div
                    className="col-span-3 w-[fit-content] md:justify-self-center font-sans font-light"
                    variants={appear}
                >
                    <p className="mt-4 border-b-2 border-purple-400 text-lg">
                        Watch Video
                    </p>
                </motion.div>
                <motion.div
                    className="col-span-1 col-start-12 hidden font-sans font-light md:block"
                    variants={appear}
                >
                    <p className="mt-8 rotate-90 whitespace-nowrap text-sm text-gray-400">
                        <span className="text-base text-purple-400">/</span> Featured
                    </p>
                </motion.div>
                <motion.div
                    className="col-span-4 md:col-span-11 h-[700px] relative my-4"
                    variants={appear}
                >
                    <div ref={featured} className='h-full flex justify-center items-center w-full absolute bg-black' style={{marginLeft: margin}}>
                        <div className='text-3xl'>Reel goes here</div>
                    </div>
                </motion.div>
            </AnimatedGrid>
            <section className='flex flex-col pt-32 pb-16 relative'>
                <div className='left-[96%] w-0 top-36 hidden md:block absolute'>
                     <p className="mt-8 rotate-90 whitespace-nowrap text-sm text-gray-400">
                        <span className="text-base text-purple-400">/</span> About
                    </p>
                </div>
                <Line title="ABOUT US" emoji='📝' width="60%" />
                <h2 className='text-7xl lg:w-1/2 pb-16 pt-8'>Cinematography, and so much more.</h2>
                <Grid>
                    <div className="col-span-4 font-sans font-light">
                        <p className="text-base text-gray-400">
                            <span className="text-lg text-purple-400">/</span> Editing
                        </p>
                        <p className="mt-4 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi aperiam vel inventore perferendis praesentium! Expedita iure magni similique, quam maiores fugit? Ea deserunt repellendus aperiam alias.
                        </p>
                    </div>
                    <div className="col-span-4 font-sans font-light">
                        <p className="text-base text-gray-400">
                            <span className="text-lg text-purple-400">/</span> Direction
                        </p>
                        <p className="mt-4 text-lg">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt quo ratione, saepe placeat quibusdam ea aut dolorum deleniti, totam dicta eum consequatur!
                        </p>
                    </div>
                    <div className="col-span-4 font-sans font-light">
                        <p className="text-base text-gray-400">
                            <span className="text-lg text-purple-400">/</span> Color
                        </p>
                        <p className="mt-4 text-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ut, quaerat recusandae sequi harum esse. Laudantium possimus rem hic ipsa at corrupti omnis sapiente, recusandae natus laborum quo adipisci nam. Possimus, nulla.
                        </p>
                    </div>
                </Grid>
            </section>
            <section className='flex flex-col pt-32 pb-16 relative'>
                <div className='left-[96%] w-0 top-36 hidden md:block absolute'>
                     <p className="mt-8 rotate-90 whitespace-nowrap text-sm text-gray-400">
                        <span className="text-base text-purple-400">/</span> Work
                    </p>
                </div>
                <Line title="OUR WORK" emoji='🎬' width="80%" />
                <h2 className='text-7xl lg:w-1/2 pb-16 pt-8'>Your vision, our passion.</h2>
                <div className=''>
                    <ProjectSummary reverse={false} />
                    <ProjectSummary reverse={true} />
                    <ProjectSummary reverse={false} />
                </div>
            </section>
        </Layout>
    )
}

export default Home