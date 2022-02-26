import { MouseEvent, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
    children: JSX.Element[]
}

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

const Tabs = ({ children }:Props ) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label)

    const handleClick = (e:MouseEvent<HTMLDivElement>, newTab:string) => {
        e.preventDefault()
        setActiveTab(newTab)
    }

    return (
        <motion.div variants={appear}>
            <ul className='flex'>
                {children.map(tab => (
                    <li 
                        className='px-4 relative' 
                        key={tab.props.label}
                    >
                        <div
                            aria-label='button'
                            className="text-xl md:font-2xl font-medium title hover:cursor-pointer" 
                            onClick={e => handleClick(e, tab.props.label)}
                        >
                            {tab.props.label}
                        </div>
                    {tab.props.label === activeTab && (
                        <motion.div className="h-[2px] bg-purple-400 w-full" layoutId="tabs" />
                    )}
                </li>))}
            </ul>
            {children.map(child => {
                if (child.props.label === activeTab)
                    return (
                        <div className='mt-8' key={child.props.label}>
                            {child.props.children}
                        </div>
                    )
            })}
        </motion.div>
    )
}

export default Tabs