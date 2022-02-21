import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
    children: ReactNode
}

const container = {
    hidden: { opacity: 1 },
    visible: { opacity: 1,
        transition: {
            staggerChildren: .2,
            delayChildren: .9,
            
        }
    }
}

const AnimatedGrid = ({ children }: Props) => {
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

export default AnimatedGrid;