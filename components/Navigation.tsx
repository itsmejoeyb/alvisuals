import NoScrollLink from './NoScrollLink'

const Navigation = () => {
    return (
        <div className="sticky top-0 z-50 flex justify-between border-b-[1px] border-gray-600 bg-[#161619] py-4 px-8 align-middle text-white">
            <NoScrollLink href="/">
                <a className="font-bold">AL VISUALS</a>
            </NoScrollLink>
            <ul className='flex'>
                <li className='mx-4'>
                    <NoScrollLink href="/work">
                        <a className="text-sm">WORK</a>
                    </NoScrollLink>
                </li>
                <li className='mx-4'>
                    <NoScrollLink href="/about">
                        <a className="text-sm">ABOUT</a>
                    </NoScrollLink>
                </li>
                <li className='mx-4'>
                    <NoScrollLink href="/contact">
                        <a className="text-sm">CONTACT</a>
                    </NoScrollLink>
                </li>
            </ul>
            
        </div>
    )
}

export default Navigation
