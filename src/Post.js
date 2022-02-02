import "./Post.css";
import amyrobsonProfileImg from  "./images/avatars/image-amyrobson.png";
import maxblagunProfileImg from "./images/avatars/image-maxblagun.png";
import ramsesmironProfileImg from "./images/avatars/image-ramsesmiron.png";
import juliusomoProfileImg from "./images/avatars/image-juliusomo.png";

const Post = ({ userDataObj, setUserDataObj }) => {
    // Function to get a new ID for a posted comment
    const getNewId = () => {
        // Find the max root ID
        const rootId = userDataObj.comments.reduce((previous, current) => Math.max(previous, current.id), 0);

        // Return an array of the highest reply ID for each root comment
        const replies = userDataObj.comments.map(comment => {
            if (comment.replies.length) return comment.replies.reduce((previous, current) => Math.max(previous, current.id), 0);
            return 0;
        });
        // Find the max reply ID
        const replyId = Math.max(...replies);

        // Get the new ID for the comment by getting highest existing ID
        return Math.max(rootId, replyId) + 1;
    }

    // Submit event function to post a new root comment
    const sendComment = (e) => {
        e.preventDefault();
        // Create object for the newly posted comment
        const postedComment = {
            id: getNewId(),
            content: e.target[0].value,
            createdAt: "Just Now",
            replies: [],
            score: 0,
            user: {image: {png: juliusomoProfileImg, webp: juliusomoProfileImg}, username: "juliusomo"},
        }

        // Add the newly posted comment to the user data state
        setUserDataObj({...userDataObj, comments: [...userDataObj.comments, postedComment]});

        e.target[0].value = "";
    };

    return (
        <div className="Post">
            <div className="post-wrapper">
                <div className="post-profileimg">
                    <img src={ juliusomoProfileImg } alt="user profile" />
                </div>
                <form id="commentForm" onSubmit={ (e) => sendComment(e) }>
                    <div className="post-body">
                        <textarea name="user-comment" placeholder="Add a comment..." maxLength="800" rows="3" cols="150" required></textarea>
                    </div>
                    <div className="post-submit">
                            <button type="submit">SEND</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Post;