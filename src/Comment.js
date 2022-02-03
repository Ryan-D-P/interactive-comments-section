import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";
import activePlus from "./images/icon-plus-active.svg";
import activeMinus from "./images/icon-minus-active.svg";
import { useState } from "react";

const Comment = ({ commentType, parentId, id, score, username, profileImg, createdAt, content, replyingTo, upvote, downvote }) => {
    // Manage the state for active upvote/downvote ratings for a comment
    const [upvoteState, setUpvoteState] = useState({active: false, src: plus});
    const [downvoteState, setDownvoteState] = useState({active: false, src: minus});

    return (
        <div className={ `comment ${commentType}` }>
            <div className="comment-ratings-wrapper">
                <div className="comment-ratings">
                    <div className="rating-plus">
                        <img
                            src={ upvoteState.src }
                            alt="plus"
                            onClick={ () => {
                                upvote(parentId, id, upvoteState.active, downvoteState.active);
                                upvoteState.active ? setUpvoteState({active: false, src: plus}) : setUpvoteState({active: true, src: activePlus});
                                setDownvoteState({active: false, src: minus});
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
                                downvoteState.active ? setDownvoteState({active: false, src: minus}) : setDownvoteState({active: true, src: activeMinus});
                                setUpvoteState({active: false, src: plus});
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
                <div className="reply">
                    <p>Reply</p>
                </div>
            </div>
        </div>
    );
}

export default Comment;