import { motion } from 'framer-motion'
import AnimatedFlex from '../../components/AnimatedFlex'
import AnimatedGrid from '../../components/AnimatedGrid'
import AnimatedLine from '../../components/AnimatedLine'
import AnimatedText from '../../components/AnimatedText'
import Layout from '../../components/Layout'
import Tabs from '../../components/Tabs'

const tabs = [
    'Dance Videos',
    'Music Videos',
    'Short Films',
    'Feature Films'
]

const demoProjects = ['Project One', 'Project Two', 'Project Three', 'Project Four', 'Project Five', 'Project Six', 'Project Seven', 'Project Eight', 'Project Nine']

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
        <Layout title="Work" description="A collection of our previous work.">
            <AnimatedLine delay={0.2} title="OUR WORK" emoji="🎬" />
            <AnimatedText line1="Your Stories" line2="Brought to Life" />
            <AnimatedFlex>
                <Tabs>
                    {tabs.map(tab => (
                        //@ts-ignore
                        <div className='mt-4' key={tab} label={tab}>
                            <AnimatedGrid delay={0.3}>
                                {demoProjects.map(project => (
                                    <motion.div
                                        className="col-span-4 row-span-6 bg-black flex justify-center items-center w-full h-full"
                                        variants={appear}
                                    >
                                        <h3>{tab + ' ' + project}</h3>
                                    </motion.div>
                                ))}
                            </AnimatedGrid>
                        </div>
                    ))}
                </Tabs>
            </AnimatedFlex>
        </Layout>
    )
}

export default index
