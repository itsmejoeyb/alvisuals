import NoScrollLink from "./NoScrollLink";

const Navigation = () => {
    return (
        <div className="bg-[#161619] py-4 border-b-[1px] border-gray-600 text-white flex justify-between px-8 align-middle sticky top-0">
            <NoScrollLink href="/">
                <a className="font-bold">AL VISUALS</a>
            </NoScrollLink>
            <NoScrollLink href="/work">
                <a className="text-sm">WORK</a>
            </NoScrollLink>
            
        </div>
    );
}

export default Navigation;