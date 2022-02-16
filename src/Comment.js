import Post from "./Post";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import activePlus from "./images/icon-plus-active.svg";
import activeMinus from "./images/icon-minus-active.svg";
import replyIcon from "./images/icon-reply.svg"
import editIcon from "./images/icon-edit.svg";
import deleteIcon from "./images/icon-delete.svg";
import { useEffect, useState } from "react";

const Comment = ({ commentType, parentId, id, score, username, currentUser, profileImg, createdAt, content, replyingTo, upvote, downvote, replyToComment, deleteComment, userDataObj, setUserDataObj, getCommentById }) => {
    // Manage the state for active upvote/downvote ratings for a comment
    const [upvoteState, setUpvoteState] = useState({active: false, src: plus});
    const [downvoteState, setDownvoteState] = useState({active: false, src: minus});

    // Try to get upvote/downvote active states from localStorage
    useEffect(() => {
        const localArrowState = JSON.parse(localStorage.getItem(`comment${id}ArrowState`));
        if (localArrowState) {
            setUpvoteState(localArrowState.up);
            setDownvoteState(localArrowState.down);
        }
    }, []);

    // State to manage whether current comment is being edited by current user
    const [isEdit, setIsEdit] = useState(false);

    // If this comment is being edited: render a Post component
    if (isEdit) {
        return (
            <Post
                inputValue={ content }
                isReplyPost={ parentId ? true : "" }
                userDataObj={ userDataObj }
                setUserDataObj={ setUserDataObj }
                setIsEdit={ setIsEdit }
                parentId={ parentId }
                id={ id }
                getCommentById={ getCommentById }
                currentUserImg={ profileImg }
                buttonText={ "UPDATE" } 
            />
        );
    }

    // Else render a Comment component
    return (
        <div className={ `comment ${commentType}` }>
            <div className="comment-ratings-wrapper">
                <div className="comment-ratings">
                    <div className="rating-plus">
                        <img
                            src={ upvoteState.src}
                            alt="plus"
                            onClick={ () => {
                                upvote(parentId, id, upvoteState.active, downvoteState.active);
                                const stateChange = upvoteState.active ? {active: false, src: plus} : {active: true, src: activePlus};
                                setUpvoteState(stateChange);
                                setDownvoteState({active: false, src: minus});
                                localStorage.setItem(`comment${id}ArrowState`, JSON.stringify({up: stateChange, down: {active: false, src: minus}}));
                            } }
                        />
                    </div>
                    <div className="rating-count">
                        <p>{ score }</p>
                    </div>
                    <div className="rating-minus">
                        <img
                            src={ downvoteState.src }
                            alt="minus"
                            onClick={ () => {
                                downvote(parentId, id, upvoteState.active, downvoteState.active);
                                const stateChange = downvoteState.active ? {active: false, src: minus} : {active: true, src: activeMinus};
                                setDownvoteState(stateChange);
                                setUpvoteState({active: false, src: plus});
                                localStorage.setItem(`comment${id}ArrowState`, JSON.stringify({up: {active: false, src: plus}, down: stateChange}));
                            } } 
                        />
                    </div>
                </div>
            </div>
            <div className="comment-body">
                <div className="comment-user">
                    <img src={ profileImg } alt={ "comment profile" } className="comment-profileimg" />
                    <p className="comment-username">{ username }</p>
                    <p className="comment-date">{ createdAt }</p>
                </div>
                <div className="comment-post">
                    <p>{ commentType === "reply-comment" && <span>{ `@${replyingTo}` }</span> } { content }</p>
                </div>
            </div>
            <div className="comment-actions">
                {
                    username !== currentUser.username && (
                        <div className="actions-wrapper">
                            <div className="reply" data-parent-id={ parentId } data-id={ id } data-comment-user={ username } onClick={ (e) => replyToComment(e) }>
                                <img src={ replyIcon } alt="reply" />
                                <p>Reply</p>
                            </div>
                        </div>
                    )
                }

                {
                    username === currentUser.username && (
                        <div className="actions-wrapper">
                            <div className="delete" data-parent-id={ parentId } data-id={ id } data-comment-user={ username } onClick={ (e) => deleteComment(e) }>
                                <img src={ deleteIcon } alt="delete" />
                                <p>Delete</p>
                            </div>
                            <div className="edit" data-parent-id={ parentId } data-id={ id } data-comment-user={ username } onClick={ (e) => setIsEdit(true) }>
                                <img src={ editIcon } alt="edit" />
                                <p>Edit</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Comment;