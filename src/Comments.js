import "./Comments.css";
import Comment from "./Comment";
import Post from "./Post";
import { useState } from "react";

const Comments = ({ userDataObj, setUserDataObj, getNewId, setNewId, profileImages }) => {
    // State to manage whether a comment is currently being replied to
    const [isReplying, setIsReplying] = useState([]);
    // State to manage the replyingTo username (the comment being replied to) for a root comment
    const [replyingToUsername, setReplyingToUsername] = useState([]);

    // Get the root comment nearest to the passed comment id (parentId and/or id)
    const getNearestRootComment = (parentId, id) => userDataObj.comments.find(comment => comment.id === parentId || comment.id === id);

    // Get a user comment by the comment id (parentId and/or id)
    const getCommentById = (parentId, id) => {
        const rootComment = getNearestRootComment(parentId, id);
        // If root comment has replies: comment to return is a reply comment; else it's a root comment
        return rootComment.replies.find(reply => reply.id === id) ?? rootComment;
    };

    // Function to set the userDataObj state when a comment rating is changed
    const changeCommentRating = (parentId, id, value) => {
        const targetComment = getCommentById(parentId, id);
        targetComment.score += value;

        // Set the user data state and set the localStorage
        const newUserData = {...userDataObj, comments: [...userDataObj.comments]};
        localStorage.setItem(`userDataObj`, JSON.stringify(newUserData));
        setUserDataObj(newUserData);
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

    // Function to reply to a comment
    const replyToComment = (e) => {
        const target = e.target.dataset.commentUser ? e.target : e.target.parentElement;

        // Set the replyingTo username for the root comment ID
        replyingToUsername[target.dataset.parentId ?? target.dataset.id] = target.dataset.commentUser;
        setReplyingToUsername([...replyingToUsername]);

        // Update replying state for nearest root comment (renders post component to nearest root comment)
        isReplying[target.dataset.parentId ?? target.dataset.id] = true;
        setIsReplying([...isReplying]);
    };

    // Function to delete a comment posted by current user
    const deleteComment = (e) => {
        const target = e.target.dataset.commentUser ? e.target : e.target.parentElement;
        
        const targetComment = getCommentById(Number(target.dataset.parentId), Number(target.dataset.id));
        const rootComment = getNearestRootComment(Number(target.dataset.parentId), Number(target.dataset.id));

        // Filter the array of root comments/reply comments to exclude the deleted comment
        if (target.dataset.parentId) rootComment.replies = rootComment.replies.filter(reply => reply.id !== targetComment.id);
        else userDataObj.comments = userDataObj.comments.filter(comment => comment.id !== targetComment.id);

        // Set the user data state and set the localStorage
        const newUserData = {...userDataObj, comments: [...userDataObj.comments]};
        localStorage.setItem(`userDataObj`, JSON.stringify(newUserData));
        setUserDataObj(newUserData);
    };

    return (
        <div className="Comments">
            {
                // For each comment stored in the data: output the template component
                userDataObj.comments && userDataObj.comments.map((comment) => (
                    <div key={ comment.id } className="comment-content-wrapper">
                        <Comment
                            commentType={ "root-comment" }
                            parentId={ null }
                            id={ comment.id }
                            score={ comment.score }
                            username={ comment.user.username }
                            currentUser={ userDataObj.currentUser }
                            profileImg={ profileImages[comment.user.username] }
                            createdAt={ comment.createdAt }
                            content={ comment.content }
                            upvote={ upvote }
                            downvote={ downvote }
                            replyToComment={ replyToComment }
                            deleteComment={ deleteComment }
                            userDataObj={ userDataObj }
                            setUserDataObj={ setUserDataObj }
                            getCommentById={ getCommentById }
                        />

                        {
                            // Set a new ID for a new comment if root ID is max
                            setNewId(Math.max(getNewId(), comment.id))
                        }

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
                                        currentUser={ userDataObj.currentUser }
                                        profileImg={ profileImages[reply.user.username] } 
                                        createdAt={ reply.createdAt } 
                                        content={ reply.content }
                                        replyingTo={ reply.replyingTo }
                                        upvote={ upvote } 
                                        downvote={ downvote }
                                        replyToComment={ replyToComment }
                                        deleteComment={ deleteComment }
                                        userDataObj={ userDataObj }
                                        setUserDataObj={ setUserDataObj }
                                        getCommentById={ getCommentById }
                                    />

                                    {
                                        // Set a new ID for a new comment if reply ID is max
                                        setNewId(Math.max(getNewId(), reply.id))
                                    }

                                </div>

                            ))
                        }

                        {
                            // If user is replying under this root comment: display the post component
                            isReplying[comment.id] && (<Post
                                                            inputValue={ "" }
                                                            isReplyPost={ true }
                                                            replyId={ comment.id }
                                                            isReplying={ isReplying }
                                                            setIsReplying={ setIsReplying }
                                                            replyingTo={ replyingToUsername[comment.id] }
                                                            userDataObj={ userDataObj }
                                                            setUserDataObj={ setUserDataObj }
                                                            getNewId={ getNewId }
                                                            currentUserImg={ profileImages[userDataObj.currentUser.username] }
                                                            buttonText={ "REPLY" }
                                                        />)
                        }

                    </div>
                ))
            }
        </div>
    );
}

export default Comments;