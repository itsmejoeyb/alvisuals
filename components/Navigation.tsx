import NoScrollLink from './NoScrollLink'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

type NavItem = {
    href: string
    title: string
}

const navItems: NavItem[] = [
    {href: '/', title: 'HOME'},
    {href: '/work', title: 'WORK'},
    {href: '/about', title: 'ABOUT'},
    {href: '/contact', title: 'CONTACT'},
]

const Navigation = () => {
    const [selectedLink, setSelectedLink] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const index = navItems.map(item => item.href).indexOf(router.pathname)
        //@ts-ignore
        setSelectedLink(navItems[index])
    }, [router.pathname])

    return (
        <div className="sticky top-0 z-50 flex justify-between border-b-[1px] border-gray-600 bg-[#161619] py-4 px-8 align-middle text-white">
            <NoScrollLink href="/">
                <a className="font-bold">AL VISUALS</a>
            </NoScrollLink>
            <ul className='flex'>
                {navItems.map(item => (
                    <li 
                        key={item.title} 
                        className='mx-4 relative'
                    >
                        <NoScrollLink href={item.href} >
                            <a className="text-sm">{item.title}</a>
                        </NoScrollLink>
                        {item === selectedLink && (
                            <motion.div className="h-[2px] bg-purple-400 w-full" layoutId="underline" />
                        )}
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Navigation
