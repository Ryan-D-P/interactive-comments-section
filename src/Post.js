import "./Post.css";

const Post = () => {
    return (
        <div className="Post">
            <div className="post-wrapper">
                <div className="post-profileimg">
                    <p>profile-img</p>
                </div>
                <div className="post-body">
                    <input type="text" placeholder="Add a comment..." />
                </div>
            </div>
            <div className="post-submit">
                    <button>SEND</button>
            </div>
        </div>
    );
}

export default Post;