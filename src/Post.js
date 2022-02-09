import "./Post.css";
import amyrobsonProfileImg from  "./images/avatars/image-amyrobson.png";
import maxblagunProfileImg from "./images/avatars/image-maxblagun.png";
import ramsesmironProfileImg from "./images/avatars/image-ramsesmiron.png";
import juliusomoProfileImg from "./images/avatars/image-juliusomo.png";

const Post = ({ isReplyPost, replyId, isReplying, setIsReplying, replyingTo, userDataObj, setUserDataObj, getId, currentUserImg, buttonText }) => {
    // Submit event function to post a new comment
    const sendComment = (e) => {
        e.preventDefault();

        // Create object for the newly posted comment
        const postedComment = {
            id: getId() + 1,
            content: e.target[0].value,
            createdAt: "Just Now",
            score: 0,
            user: {image: {png: juliusomoProfileImg, webp: juliusomoProfileImg}, username: "juliusomo"},
        };

        // If newly posted comment is a root comment
        if (!isReplyPost) {
            postedComment.replies = [];
            // Add the newly posted comment to the user data state
            setUserDataObj({...userDataObj, comments: [...userDataObj.comments, postedComment]});
            e.target[0].value = "";
            return;
        }

        const newArr = [...userDataObj.comments];
        // Get the nearest root comment
        const rootComment = newArr.find(comment => comment.id === replyId);
        
        // Set the replyingTo username for the reply comment
        postedComment.replyingTo = replyingTo;

        // Append the new reply comment to the root comment
        rootComment.replies.push(postedComment);
        setUserDataObj({...userDataObj, comments: newArr});

        // Update replying state for nearest root comment (unmounts post component to nearest root comment)
        isReplying[replyId] = false;
        setIsReplying([...isReplying]);
    };

    return (
        <div className={ `Post${isReplyPost && " reply-comment"}` }>
            <div className="post-wrapper">
                <div className="post-profileimg">
                    <img src={ currentUserImg } alt="user profile" />
                </div>
                <form onSubmit={ (e) => sendComment(e) }>
                    <div className="post-body">
                        <textarea name="user-comment" placeholder="Add a comment..." maxLength="800" rows="3" cols="150" required></textarea>
                    </div>
                    <div className="post-submit">
                            <button type="submit">{ buttonText }</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Post;