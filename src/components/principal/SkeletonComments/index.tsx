
interface SkeletonCommentsProps {
    count:number;
}


export function SkeletonComments({ count }:SkeletonCommentsProps) {
    return (
        <>
            <div className="mt-12 flex w-full gap-10 lg:gap-12 justify-between flex-wrap">
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} className="animate-pulse m-auto lg:m-0 w-[450px] flex flex-col gap-4">
                        <div className="bg-gray-200 w-full h-[24px]"></div>
                        <div className="bg-gray-200 w-full h-[24px]"></div>
                        <div className="bg-gray-200 w-full h-[24px]"></div>
                    </div>
                ))}
            </div>
        </>
    )
}