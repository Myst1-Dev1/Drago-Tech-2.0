import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

interface ProductCommentsProps {
    comments: {
        author: {
          node: {
            name: string;
          };
        };
        content: string;
        date: string;
      }[];
}

export function ProductComments({ comments }:ProductCommentsProps) {
    console.log(comments);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
      
        return `${day}/${month}/${year}`;
      };

    return (
        <>
            <div className="py-12">
                <div className="flex gap-3 items-center">
                    <FaStar className="text-red-500" />
                    <h2 className="font-bold text-xl">Avaliações dos usuários</h2>
                </div>
                
                    <div className="mt-12 flex gap-10 lg:gap-6 justify-between flex-wrap">
                    {comments.length === 0 ? <span>Produto sem avaliações 😞</span> : comments?.map((comment, index) => (
                        <div key={index} className="m-auto lg:m-0 max-w-[450px] w-full border-b border-gray-400 flex flex-col gap-4">
                            <h5 className="font-bold">{comment?.author.node.name}</h5>
                            <div className="flex flex-col gap-2">
                                {/* <div className="flex items-center gap-3">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                </div> */}
                                <span className="text-gray-400">Avaliado em {formatDate(comment?.date)}</span>
                            </div>
                            {/* <h6 className="font-bold">Incrível</h6> */}
                            <div dangerouslySetInnerHTML={{ __html: comment.content }} />
                        </div>
                        ))}
                    </div>
            </div>
            
            <div className="flex justify-center items-center gap-5 py-12">
                <div className="cursor-pointer p-2 flex justify-center items-center bg-black rounded-md transition-all duration-500 hover:bg-red-600">
                    <FaArrowLeft className="text-white" />
                </div>
                <span className="cursor-pointer text-white p-4 flex justify-center items-center bg-black rounded-md w-5 h-5 transition-all duration-500 hover:bg-red-600">1</span>
                <span className="cursor-pointer text-white p-4 flex justify-center items-center bg-black rounded-md w-5 h-5 transition-all duration-500 hover:bg-red-600">2</span>
                <span className="cursor-pointer text-white p-4 flex justify-center items-center bg-black rounded-md w-5 h-5 transition-all duration-500 hover:bg-red-600">3</span>
                <div className="cursor-pointer p-2 flex justify-center items-center bg-black rounded-md transition-all duration-500 hover:bg-red-600">
                    <FaArrowRight className="text-white" />
                </div>
            </div>
        </>
    )
}