
interface SkeletonProductsProps {
    count:number;
}

export function SkeletonProducts({ count }:SkeletonProductsProps) {
    return (
        <div>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="animate-pulse flex flex-col gap-4 max-w-[250px] mb-12">
                    <div className="bg-gray-200 w-full h-[150px]"></div>
                    <div className="w-full h-5 bg-gray-200"></div>
                    <div className="w-full h-7 bg-gray-200"></div>
                </div>
            ))}
        </div>
    );
}