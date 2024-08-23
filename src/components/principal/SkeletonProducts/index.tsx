
interface SkeletonProductsProps {
    count:number;
}

export function SkeletonProducts({ count }:SkeletonProductsProps) {
    return (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 lg:grid-cols-4 py-8">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="animate-pulse flex flex-col gap-4 w-[200px] mb-12">
                    <div className="bg-gray-200 w-full h-[150px]"></div>
                    <div className="w-full h-5 bg-gray-200"></div>
                    <div className="w-full h-7 bg-gray-200"></div>
                </div>
            ))}
        </div>
    );
}