import { useEffect } from "react";
import "./Comments.css";
import Comment from "./Comment";

const Comments = ({ amyrobsonProfileImg, maxblagunProfileImg, ramsesmironProfileImg, juliusomoProfileImg, plus, minus, comments, getComments }) => {
    // Get data from JSON file when component is mounted
    useEffect(() => getComments(), []);

    // Object to store the profile image URLs
    const profileImages = {
        amyrobson: amyrobsonProfileImg,
        maxblagun: maxblagunProfileImg,
        ramsesmiron: ramsesmironProfileImg,
        juliusomo: juliusomoProfileImg,
    };

    return (
        <div className="Comments">
            {
                // For each comment stored in the data: output the template component
                comments.comments && comments.comments.map((comment) => (
                    <div key={ comment.id } className="comment-content-wrapper">
                        <Comment plus={ plus } minus={ minus } commentType={ "root-comment" } score={ comment.score } username={ comment.user.username } profileImg={ profileImages[comment.user.username] } createdAt={ comment.createdAt } content={ comment.content } />
                        {
                            // For each reply comment of this comment: output the template component
                            comment.replies.map((reply) => (
                                <div key={ reply.id } className="reply-wrapper">
                                    <Comment plus={ plus } minus={ minus } commentType={ "reply-comment" } score={ reply.score } username={ reply.user.username } profileImg={ profileImages[reply.user.username] } createdAt={ reply.createdAt } content={ reply.content } />
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default Comments;