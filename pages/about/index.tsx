import AnimatedGrid from '../../components/AnimatedGrid'
import AnimatedLine from '../../components/AnimatedLine'
import AnimatedText from '../../components/AnimatedText'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import Grid from '../../components/Grid'
import Line from '../../components/Line'

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

const index = () => {
    return (
        <Layout title="About" description="A little about who we are and what we do.">
            <AnimatedLine delay={0.2} title="ABOUT US" emoji="📝" />
            <AnimatedText line1="Cinematography," line2="and So Much More" />
            <div className="mt-16">
                <AnimatedGrid>
                    <motion.div
                        className="col-span-4 font-sans font-light"
                        variants={appear}
                    >
                        <p className="text-base text-gray-400">
                            <span className="text-lg text-purple-400">/</span> Who we are
                        </p>
                        <p className="mt-4 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia quaerat deleniti ipsa, optio quisquam in? Dolorum totam repudiandae fuga voluptatem officia deserunt corporis, ipsam aut delectus placeat libero earum ea architecto?
                        </p>
                    </motion.div>
                    <motion.div
                        className="col-span-4 font-sans font-light"
                        variants={appear}
                    >
                        <p className="text-base text-gray-400">
                            <span className="text-lg text-purple-400">/</span> What we do
                        </p>
                        <p className="mt-4 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusamus reiciendis exercitationem est molestiae, nisi suscipit atque, sunt eaque laudantium veritatis consectetur facilis iure sit. Maiores, esse!
                        </p>
                    </motion.div>
                    <motion.div
                        className="col-span-4 font-sans font-light"
                        variants={appear}
                    >
                        <p className="text-base text-gray-400">
                            <span className="text-lg text-purple-400">/</span> Why us
                        </p>
                        <p className="mt-4 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eligendi numquam, neque unde nihil harum libero laborum sapiente, vero blanditiis expedita aliquid dolorum quod.
                        </p>
                    </motion.div>
                    <motion.div
                        className="col-span-4 md:col-span-6 h-[620px] relative my-4"
                        variants={appear}
                    >
                        <div className='h-full flex justify-center items-center w-full bg-black'>
                            <div className='text-3xl'>Photo</div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-span-4 md:col-span-6 my-4 flex flex-col justify-between"
                        variants={appear}
                    >
                        <div className='h-[300px] flex justify-center items-center w-full bg-black'>
                            <div className='text-3xl'>Photo</div>
                        </div>
                        <div className='h-[300px] flex justify-center items-center w-full bg-black'>
                            <div className='text-3xl'>Photo</div>
                        </div>
                    </motion.div>
                </AnimatedGrid>
                <section className='flex flex-col pt-32 pb-16'>
                    <Line title="THE TEAM" emoji='👋' width="60%" />
                    <h2 className='text-7xl lg:w-1/2 pb-16 pt-8'>Meet the Team</h2>
                    <Grid>
                        <div className="col-span-4 md:col-span-6 h-[600px] relative my-4">
                            <div className='h-full flex justify-center items-center w-full bg-black'>
                                <div className='text-3xl'>Photo</div>
                            </div>
                        </div>
                        <div className="col-span-4 md:col-span-6 h-[600px] relative my-4">
                            <div className="flex flex-col justify-center h-full">
                                <p className="text-base text-gray-400 mb-4">
                                    <span className="text-lg text-purple-400">/</span> JOB TITLE
                                </p>
                                <h3 className="text-3xl pb-4">Name</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat repellat saepe voluptatem eaque non laboriosam voluptatum quam corrupti nemo distinctio similique veniam totam sed, quibusdam iste asperiores eos omnis magni modi nobis labore! Deserunt laudantium fuga repellat illum sequi placeat atque, mollitia suscipit iusto accusantium.</p>
                            </div>
                        </div>
                        
                        <div className="col-span-4 md:col-span-6 h-[600px] relative my-4">
                            <div className="flex flex-col justify-center h-full">
                                <p className="text-base text-gray-400 mb-4">
                                    <span className="text-lg text-purple-400">/</span> JOB TITLE
                                </p>
                                <h3 className="text-3xl pb-4">Name</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat repellat saepe voluptatem eaque non laboriosam voluptatum quam corrupti nemo distinctio similique veniam totam sed, quibusdam iste asperiores eos omnis magni modi nobis labore! Deserunt laudantium fuga repellat illum sequi placeat atque, mollitia suscipit iusto accusantium.</p>
                            </div>
                        </div>
                        <div className="col-span-4 md:col-span-6 h-[600px] relative my-4">
                            <div className='h-full flex justify-center items-center w-full bg-black'>
                                <div className='text-3xl'>Photo</div>
                            </div>
                        </div>

                        <div className="col-span-4 md:col-span-6 h-[600px] relative my-4">
                            <div className='h-full flex justify-center items-center w-full bg-black'>
                                <div className='text-3xl'>Photo</div>
                            </div>
                        </div>
                        <div className="col-span-4 md:col-span-6 h-[600px] relative my-4">
                            <div className="flex flex-col justify-center h-full">
                                <p className="text-base text-gray-400 mb-4">
                                    <span className="text-lg text-purple-400">/</span> JOB TITLE
                                </p>
                                <h3 className="text-3xl pb-4">Name</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat repellat saepe voluptatem eaque non laboriosam voluptatum quam corrupti nemo distinctio similique veniam totam sed, quibusdam iste asperiores eos omnis magni modi nobis labore! Deserunt laudantium fuga repellat illum sequi placeat atque, mollitia suscipit iusto accusantium.</p>
                            </div>
                        </div>
                    </Grid>
                </section>
            </div>
        </Layout>
    )
}

export default index