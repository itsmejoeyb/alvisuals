import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
    children: ReactNode
}

const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: .2,
            delayChildren: .9,

        }
    }
}

const AnimatedFlex = ({ children }: Props) => {
    return (
        <motion.div
            className='mt-32 w-full'
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.div>
    );
}

export default AnimatedFlex