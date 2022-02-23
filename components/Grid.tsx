import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const Grid = ({ children }: Props) => {
    return (
        <div 
            className='grid grid-cols-4 md:grid-cols-12 gap-x-4 gap-y-11'
        >
            {children}
        </div>
    );
}

export default Grid;