import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
    children: ReactNode
    delay: number
}

const AnimatedGrid = ({ children, delay }: Props) => {
    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .2,
                delayChildren: delay,

            }
        }
    }

    return (
        <motion.div 
            className='grid grid-cols-4 md:grid-cols-12 gap-x-4 gap-y-11'
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.div>
    );
}

export default AnimatedGrid