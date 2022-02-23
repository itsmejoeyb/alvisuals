import NoScrollLink from './NoScrollLink'

const Navigation = () => {
    return (
        <div className="sticky top-0 z-50 flex justify-between border-b-[1px] border-gray-600 bg-[#161619] py-4 px-8 align-middle text-white">
            <NoScrollLink href="/">
                <a className="font-bold">AL VISUALS</a>
            </NoScrollLink>
            <NoScrollLink href="/work">
                <a className="text-sm">WORK</a>
            </NoScrollLink>
        </div>
    )
}

export default Navigation
