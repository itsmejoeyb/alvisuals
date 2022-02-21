import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import Head from 'next/head'

type Props = {
    children: ReactNode
    title: string
    description: string
    bg: string
}

const variants = {
    hidden: { opacity: 1 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
}

const Layout = ({ children, title, description, bg }: Props): JSX.Element => (
    <div className="bg-[#161619] min-h-screen">
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Roboto+Condensed&family=Roboto+Serif:wght@400;500&family=Vesper+Libre&display=swap" rel="stylesheet" />
        </Head>
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
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