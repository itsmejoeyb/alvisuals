import { motion } from 'framer-motion'

type Props = {
    delay: number
    title?: string
}

// const grow = {
//     hidden: { width: 0, opacity: 0 },
//     visible: {
//         width: '90%',
//         opacity: 1,
//         transition: {
//             delay: .7,
//             duration: 1.5,
//             ease: [0, .8, .9, 1]
//         }
//     }
// }

const AnimatedLine = ({delay, title}: Props) => {

    const grow = {
        hidden: { width: 0, opacity: 0 },
        visible: {
            width: title ? '85%' : '90%',
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
            {title && <span className='mr-4 text-purple-400'>{title}</span>}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={grow}
                className="border-b-2 border-solid border-purple-400 my-8 after:content-['🎥'] after:absolute relative after:-right-10 after:-translate-x-1/2 after:-translate-y-1/2"
            >  
            </motion.div>
        </div>
    );
}

export default AnimatedLine;