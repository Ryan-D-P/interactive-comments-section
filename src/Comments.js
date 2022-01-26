import "./Comments.css";
import Comment from "./Comment";
import amyrobsonProfileImg from  "./images/avatars/image-amyrobson.png";
import maxblagunProfileImg from "./images/avatars/image-maxblagun.png";
import ramsesmironProfileImg from "./images/avatars/image-ramsesmiron.png";
import juliusomoProfileImg from "./images/avatars/image-juliusomo.png";
import data from "./data.json";
import { useState } from "react";

const Comments = () => {
    // State to store the comments data
    const [comments, setComments] = useState(data);

    // Functions to update the state when a comment is upvoted/downvoted
    const upvote = (id) => {
        const obj = {...comments};
        obj.comments.find(comment => comment.id === id).score += 1;
        setComments(obj);
    };

    const downvote = (id) => {
        const obj = {...comments};
        obj.comments.find(comment => comment.id === id).score -= 1;
        setComments(obj);
    };

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
                        <Comment commentType={ "root-comment" } id={ comment.id } score={ comment.score } username={ comment.user.username } profileImg={ profileImages[comment.user.username] } createdAt={ comment.createdAt } content={ comment.content } upvote={ upvote } downvote={ downvote } />

                        {
                            // For each reply comment of this comment: output the template component
                            comment.replies.map((reply) => (
                                <div key={ reply.id } className="reply-wrapper">
                                    <Comment commentType={ "reply-comment" } score={ reply.score } username={ reply.user.username } profileImg={ profileImages[reply.user.username] } createdAt={ reply.createdAt } content={ reply.content } upvote={ upvote } downvote={ downvote } />
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