import "./Post.css";
import amyrobsonProfileImg from  "./images/avatars/image-amyrobson.png";
import maxblagunProfileImg from "./images/avatars/image-maxblagun.png";
import ramsesmironProfileImg from "./images/avatars/image-ramsesmiron.png";
import juliusomoProfileImg from "./images/avatars/image-juliusomo.png";

const Post = ({ userDataObj, setUserDataObj, getId }) => {
    // Submit event function to post a new root comment
    const sendComment = (e) => {
        e.preventDefault();

        // Create object for the newly posted comment
        const postedComment = {
            id: getId() + 1,
            content: e.target[0].value,
            createdAt: "Just Now",
            replies: [],
            score: 0,
            user: {image: {png: juliusomoProfileImg, webp: juliusomoProfileImg}, username: "juliusomo"},
        };

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