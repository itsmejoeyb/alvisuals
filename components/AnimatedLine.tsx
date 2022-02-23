import { motion } from 'framer-motion'

type Props = {
    delay: number
    title?: string
    emoji: string
}

const AnimatedLine = ({delay, title, emoji}: Props) => {
    const grow = {
        hidden: { width: 0, opacity: 0 },
        visible: {
            width: title ? '82%' : '90%',
            opacity: 1,
            transition: {
                delay: delay,
                duration: 1.5,
                ease: [0, .8, .9, 1]
            }
        }
    }

    const show = {
        hidden: { opacity: 0, y: "50%" },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: delay,
                duration: .3,
            }
        }
    }

    const appear = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: delay,
                duration: 1.5,
                ease: [0, .8, .9, 1]
            }
        }
    }

    return (
        <div className='flex items-center'>
            {title && <motion.div 
                className='mr-4 text-purple-400'
                initial="hidden"
                animate="visible"
                variants={show}
            >{title}</motion.div>}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={grow}
                className="border-b-2 border-solid border-purple-400 my-8"
            >  
            </motion.div>
            <motion.div 
                className='ml-4'
                initial="hidden"
                animate="visible"
                variants={appear}
            >{emoji}</motion.div>
        </div>
    );
}

export default AnimatedLine