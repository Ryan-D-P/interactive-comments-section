import "./Post.css";
import amyrobsonProfileImg from  "./images/avatars/image-amyrobson.png";
import maxblagunProfileImg from "./images/avatars/image-maxblagun.png";
import ramsesmironProfileImg from "./images/avatars/image-ramsesmiron.png";
import juliusomoProfileImg from "./images/avatars/image-juliusomo.png";

const Post = ({ inputValue, isReplyPost, replyId, isReplying, setIsReplying, replyingTo, userDataObj, setUserDataObj, setIsEdit, parentId, id, getCommentById, getNewId, currentUserImg, buttonText }) => {
    // Submit event function to post a new comment
    const sendComment = (e) => {
        e.preventDefault();

        // If comment being sent is from an edit Post component
        if (setIsEdit) {
            // Change the content property value of the comment obj to the edit Post input value
            getCommentById(parentId, id).content = e.target[0].value;

            // Set the user data state and set the localStorage
            const newUserData = {...userDataObj};
            localStorage.setItem(`userDataObj`, JSON.stringify(newUserData));
            setUserDataObj(newUserData);
            setIsEdit(false);
            
            return;
        }

        // Create object for the newly posted comment
        const postedComment = {
            id: getNewId() + 1,
            content: e.target[0].value,
            createdAt: "Just Now",
            score: 0,
            user: {image: {png: juliusomoProfileImg, webp: juliusomoProfileImg}, username: "juliusomo"},
        };

        // If newly posted comment is a root comment
        if (!isReplyPost) {
            postedComment.replies = [];

            // Set the user data state and set the localStorage
            const newUserData = {...userDataObj, comments: [...userDataObj.comments, postedComment]};
            localStorage.setItem(`userDataObj`, JSON.stringify(newUserData));
            setUserDataObj(newUserData);

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

        // Set the user data state and set the localStorage
        const newUserData = {...userDataObj, comments: newArr};
        localStorage.setItem(`userDataObj`, JSON.stringify(newUserData));
        setUserDataObj(newUserData);

        // Update replying state for nearest root comment (unmounts post component at nearest root comment)
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
                        <textarea name="user-comment" placeholder="Add a comment..." defaultValue={ inputValue } maxLength="800" rows="3" cols="150" required></textarea>
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