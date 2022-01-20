import "./Post.css";

const Post = ({ juliusomoProfileImg }) => {
    return (
        <div className="Post">
            <div className="post-wrapper">
                <div className="post-profileimg">
                    <img src={ juliusomoProfileImg } alt="user profile" />
                </div>
                <form onSubmit={ (e) => e.preventDefault() }>
                    <div className="post-body">
                        <textarea name="user-comment" placeholder="Add a comment..." maxLength="800" rows="3" cols="150" required></textarea>
                    </div>
                    <div className="post-submit">
                            <button type="button">SEND</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Post;