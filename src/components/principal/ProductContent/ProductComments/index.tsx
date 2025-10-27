import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Pagination } from "../../Pagination";
import { SkeletonComments } from "../../SkeletonComments";
import { Comments } from "@/types/products";

interface ProductCommentsProps {
    comments: Comments[];
}

export function ProductComments({ comments }:ProductCommentsProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const itensPerPage = 6;

    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const commentsData = comments.slice(startIndex, endIndex);

    console.log(comments);

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
                            <h5 className="font-bold">{comment?.clientName}</h5>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    {[...Array(comment?.rating)].map((_, i) => (
                                        <FaStar
                                        key={i}
                                        className={i < comment.rating ? "text-yellow-400" : "text-gray-300"}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="font-normal text-gray-400">{comment.content}</p>
                        </div>
                        ))}
                    </div>
            </div>
            
            {commentsData.length === 0 ? '' : <Pagination setLoading = {setLoading} itensPerPage = {itensPerPage} data = {comments} currentPage = {currentPage} setCurrentPage = {setCurrentPage} />}
        </>
    )
}