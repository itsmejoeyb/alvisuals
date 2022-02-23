type Props = {
    reverse: boolean
}

const ProjectSummary = ({ reverse }: Props) => {
    return (
        !reverse ? <div className='flex w-full mb-36'>
            <div className="w-2/3 mr-8">
                <div className="w-full bg-black h-[500px] flex items-center justify-center">
                    <div className="text-2xl">Project video</div>
                </div>
            </div>
            <div className="flex flex-col w-1/3 ml-8 justify-center">
                <p className="text-base text-gray-400 mb-4">
                    <span className="text-lg text-purple-400">/</span> CUSTOMER
                </p>
                <h3 className="text-3xl pb-4">Project Title</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat repellat saepe voluptatem eaque non laboriosam voluptatum quam corrupti nemo distinctio similique veniam totam sed, quibusdam iste asperiores eos omnis magni modi nobis labore! Deserunt laudantium fuga repellat illum sequi placeat atque, mollitia suscipit iusto accusantium.</p>
            </div>
        </div> : 
        <div className='flex w-full mb-36'>
            <div className="flex flex-col w-1/3 mr-8 justify-center">
                <p className="text-base text-gray-400 mb-4">
                    <span className="text-lg text-purple-400">/</span> CUSTOMER
                </p>
                <h3 className="text-3xl pb-4">Project Title</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat repellat saepe voluptatem eaque non laboriosam voluptatum quam corrupti nemo distinctio similique veniam totam sed, quibusdam iste asperiores eos omnis magni modi nobis labore! Deserunt laudantium fuga repellat illum sequi placeat atque, mollitia suscipit iusto accusantium.</p>
            </div>
            <div className="w-2/3 ml-8">
                <div className="w-full bg-black h-[500px] flex items-center justify-center">
                    <div className="text-2xl">Project video</div>
                </div>
            </div>
        </div>

    );
}

export default ProjectSummary;