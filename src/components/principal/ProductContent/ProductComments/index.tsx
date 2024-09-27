import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Pagination } from "../../Pagination";
import { SkeletonComments } from "../../SkeletonComments";

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
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const itensPerPage = 6;

    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const commentsData = comments.slice(startIndex, endIndex);

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
                
                    <div className="mt-12 w-full flex gap-10 lg:gap-12 justify-between flex-wrap">
                    {commentsData.length === 0 ? <span>Produto sem avaliações 😞</span> : loading ? <SkeletonComments count={commentsData.length}/> : commentsData?.map((comment, index) => (
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
            
            {commentsData.length === 0 ? '' : <Pagination setLoading = {setLoading} itensPerPage = {itensPerPage} data = {comments} currentPage = {currentPage} setCurrentPage = {setCurrentPage} />}
        </>
    )
}