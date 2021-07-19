import axios from "axios";
import { useState, useEffect } from "react";

const BASEURL = "http://127.0.0.1:8000/posts/?format=json" 


const Post = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(BASEURL)
      .then((res) => setPost(res.data))
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [posts]);

  return posts.length ===0 ? (
    <div>
     <h3>Loading...</h3>
    </div>
  ) : (
    posts.map((post) => {
      const {user, date, image, likes, description, comments} = post;
      

      return(
        <div className="container-post">
        <div className="post_header">
          <div className="post_user_avatar">
            <img src="/images/avatar.png" alt="user_avatar" width="32px" />
          </div>
          <div className="post_username">
            <div>
              <span>{user}</span>
            </div>
            <div>
              <img src="/images/menu1.png" alt="post-menu" />
            </div>
          </div>
        </div>
        <div className="post_body">
          <div className="post_image">
            <img src={image} alt="" />
          </div>
          <div className="review-area">
            <div className="review-icon">
              <div className="review-box1">
                <img src="/images/heart.png" alt="like post" width="28px" />
                <img
                  src="/images/comment.png"
                  alt="comment post"
                  width="28px"
                />
                <img src="/images/inbox.png" alt="share post" width="28px" />
              </div>
              <div>
                <img
                  src="/images/bookmark.png"
                  alt="bookmark post"
                  width="28px"
                />
              </div>
            </div>
            <div className="review-likes">
              <span>{likes} likes</span>
            </div>
            <div className="review-description">
              <span>user_id: {user}</span>
              <p>{description}</p>
              <div className="users_comment_top2">
                {comments.map((comm) => {
                  const {post, user, comment} = comm;
                  return(<div>
                    <span>user_id: {user}</span>
                    <p>{comment}</p>
                  </div>);
                })}
              </div>
              <div className="post_time">
                <span>{date} DAY AGO</span>
              </div>
            </div>
            <div className="review-comment_box">
              <div className="post_emoji">
                <img src="/images/emoji.png" alt="emoji post" width="28" />
              </div>
              <div className="post_comment">
                <textarea
                  className="autoExpand"
                  rows="1"
                  autofocus
                  placeholder="Add to comment..."
                ></textarea>
              </div>
              <div className="post_button">
                <span>Post</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    })
  );
};

export default Post;
