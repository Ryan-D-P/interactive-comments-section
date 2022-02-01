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
    const [userDataObj, setUserDataObj] = useState(data);

    // Function to set the user state when a comment rating is changed
    const changeCommentRating = (parentId, id, value) => {
        const newArr = [...userDataObj.comments];

        // Get the nearest root comment
        const rootComment = newArr.find(comment => comment.id === parentId || comment.id === id);
        // If root comment has replies: comment to change is a reply comment; else it's a root comment
        const targetComment = rootComment.replies?.find(reply => reply.id === id) || rootComment;
        targetComment.score += value;

        setUserDataObj({...userDataObj, comments: newArr});
    };

    // Functions to update the state when a comment is upvoted/downvoted
    const upvote = (parentId, id, plusActive, minusActive) => {
        const value = plusActive ? -1 : minusActive ? 2 : 1;
        changeCommentRating(parentId, id, value);
    };
    const downvote = (parentId, id, plusActive, minusActive) => {
        const value = plusActive ? -2 : minusActive ? 1 : -1;
        changeCommentRating(parentId, id, value);
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
                userDataObj.comments && userDataObj.comments.map((comment) => (
                    <div key={ comment.id } className="comment-content-wrapper">
                        <Comment
                            commentType={ "root-comment" }
                            id={ comment.id }
                            score={ comment.score }
                            username={ comment.user.username }
                            profileImg={ profileImages[comment.user.username] }
                            createdAt={ comment.createdAt }
                            content={ comment.content }
                            upvote={ upvote }
                            downvote={ downvote } 
                        />

                        {
                            // For each reply comment of this comment: output the template component
                            comment.replies.map((reply) => (
                                <div key={ reply.id } className="reply-wrapper">
                                    <Comment
                                        commentType={ "reply-comment" }
                                        parentId={ comment.id }
                                        id={ reply.id }
                                        score={ reply.score } 
                                        username={ reply.user.username } 
                                        profileImg={ profileImages[reply.user.username] } 
                                        createdAt={ reply.createdAt } 
                                        content={ reply.content } 
                                        upvote={ upvote } 
                                        downvote={ downvote }
                                    />
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