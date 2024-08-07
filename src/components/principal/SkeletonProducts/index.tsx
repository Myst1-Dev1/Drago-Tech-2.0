

export function SkeletonProducts() {
    return (
        <>
            <div className="animate-pulse flex flex-col gap-4 max-w-[250px]">
                <div className="bg-gray-200 w-full h-[150px]"></div>
                <div className="w-full h-5 bg-gray-200"></div>
                <div className="w-full h-7 bg-gray-200"></div>
            </div>
        </>
    )
}