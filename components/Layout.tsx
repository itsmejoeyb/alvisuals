import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'

type Props = {
    children: ReactNode
    title: string
    description: string
}

const variants = {
    hidden: { opacity: 1 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
}

const Layout = ({ children, title, description }: Props): JSX.Element => (
    <div className="bg-[#161619] min-h-screen">
        <NextSeo title={"AL Visuals | " + title} description={description} openGraph={{ title, description }} />
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear', duration: .5 }}
            className="text-white container mx-auto p-4"
        >
            {children}
        </motion.main>
    </div>
)

export default Layout