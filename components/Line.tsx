type Props = {
    title: string
    emoji: string
    width: string
}

const Line = ({ title, emoji, width }: Props) => {
    return (
        <div className='flex items-center'>
            {title && <div 
                className='mr-4 text-purple-400'
            >{title}</div>}
            <div
                className="border-b-2 border-solid border-purple-400 my-8"
                style={{ width }}
            >  
            </div>
            <div 
                className='ml-4'
            >{emoji}</div>
        </div>
    );
}

export default Line;