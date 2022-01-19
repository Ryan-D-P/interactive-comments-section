import "./Comments.css";

const Comments = () => {
    return (
        <div className="Comments">
            <div className="comment-content-wrapper">
                <div className="comment root-comment">
                    <div className="comment-ratings-wrapper">
                        <div className="comment-ratings">
                            <div className="rating-plus">
                                <p>+</p>
                            </div>
                            <div className="rating-count">
                                <p>12</p>
                            </div>
                            <div className="rating-minus">
                                <p>-</p>
                            </div>
                        </div>
                    </div>
                    <div className="comment-body">
                        <div className="comment-user">
                            <p className="comment-profileimg">profile-img</p>
                            <p className="comment-username">amyrobson</p>
                            <p className="comment-date">1 month ago</p>
                        </div>
                        <div className="comment-post">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore eveniet quia corrupti alias, doloremque facere a, harum aut, impedit nostrum maiores. Accusantium laborum ad suscipit corrupti eum molestias reiciendis consequuntur, quos cupiditate minima numquam necessitatibus magni delectus natus quas sit impedit velit est! Corrupti cum culpa officia adipisci reprehenderit.</p>
                        </div>
                    </div>
                    <div className="comment-actions">
                            <div className="reply">
                                <p>Reply</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className="comment-content-wrapper">
                <div className="comment root-comment">
                    <div className="comment-ratings-wrapper">
                        <div className="comment-ratings">
                            <div className="rating-plus">
                                <p>+</p>
                            </div>
                            <div className="rating-count">
                                <p>5</p>
                            </div>
                            <div className="rating-minus">
                                <p>-</p>
                            </div>
                        </div>
                    </div>
                    <div className="comment-body">
                        <div className="comment-user">
                            <p className="comment-profileimg">profile-img</p>
                            <p className="comment-username">amyrobson</p>
                            <p className="comment-date">2 weeks ago</p>
                            <div className="comment-actions">
                                <div className="comment-reply">
                                    <p>Reply</p>
                                </div>
                            </div>
                        </div>
                        <div className="comment-post">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore eveniet quia corrupti alias, doloremque facere a, harum aut, impedit nostrum maiores. Accusantium laborum ad suscipit corrupti eum molestias reiciendis consequuntur, quos cupiditate minima numquam necessitatibus magni delectus natus quas sit impedit velit est! Corrupti cum culpa officia adipisci reprehenderit.</p>
                        </div>
                    </div>
                </div>
                <div className="comment reply-comment">
                    <div className="comment-ratings-wrapper">
                        <div className="comment-ratings">
                            <div className="rating-plus">
                                <p>+</p>
                            </div>
                            <div className="rating-count">
                                <p>4</p>
                            </div>
                            <div className="rating-minus">
                                <p>-</p>
                            </div>
                        </div>
                    </div>
                    <div className="comment-body">
                        <div className="comment-user">
                            <p className="comment-profileimg">profile-img</p>
                            <p className="comment-username">amyrobson</p>
                            <p className="comment-date">1 week ago</p>
                            <div className="comment-actions">
                                <div className="comment-reply">
                                    <p>Reply</p>
                                </div>
                            </div>
                        </div>
                        <div className="comment-post">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore eveniet quia corrupti alias, doloremque facere a, harum aut, impedit nostrum maiores. Accusantium laborum ad suscipit corrupti eum molestias reiciendis consequuntur, quos cupiditate minima numquam necessitatibus magni delectus natus quas sit impedit velit est! Corrupti cum culpa officia adipisci reprehenderit.</p>
                        </div>
                    </div>
                </div>
                <div className="comment reply-comment">
                    <div className="comment-ratings-wrapper">
                        <div className="comment-ratings">
                            <div className="rating-plus">
                                <p>+</p>
                            </div>
                            <div className="rating-count">
                                <p>2</p>
                            </div>
                            <div className="rating-minus">
                                <p>-</p>
                            </div>
                        </div>
                    </div>
                    <div className="comment-body">
                        <div className="comment-user">
                            <p className="comment-profileimg">profile-img</p>
                            <p className="comment-username">amyrobson</p>
                            <p className="comment-date">2 days ago</p>
                            <div className="comment-actions">
                                <div className="comment-delete">
                                    <p>Delete</p>
                                </div>
                                <div className="comment-edit">
                                    <p>Edit</p>
                                </div>
                            </div>
                        </div>
                        <div className="comment-post">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore eveniet quia corrupti alias, doloremque facere a, harum aut, impedit nostrum maiores. Accusantium laborum ad suscipit corrupti eum molestias reiciendis consequuntur, quos cupiditate minima numquam necessitatibus magni delectus natus quas sit impedit velit est! Corrupti cum culpa officia adipisci reprehenderit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;