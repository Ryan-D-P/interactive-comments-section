import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";

const Comment = ({ commentType, id, score, username, profileImg, createdAt, content, upvote, downvote }) => {
    return (
        <div className={ `comment ${commentType}` }>
            <div className="comment-ratings-wrapper">
                <div className="comment-ratings">
                    <div className="rating-plus">
                        <img src={ plus } alt="plus" onClick={ () => upvote(id) } />
                    </div>
                    <div className="rating-count">
                        <p>{ score }</p>
                    </div>
                    <div className="rating-minus">
                        <img src={ minus } alt="minus" onClick={ () => downvote(id) } />
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
                    <p>{ content }</p>
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