import "../App.css";

const Home = () => {
  return (
    <div className="home_flex">
      <div className="container">
        <div className="post_row">

        {/* Single Post */}

        <div className="container-post">
          <div className="post_header">
            <div className="post_user_avatar">
              <img src="/images/avatar.png" alt="user_avatar" width="32px" />
            </div>
            <div className="post_username">
              <div>
                <span>androidapps.development.blogs</span>
              </div>
              <div>
                <img src="/images/menu1.png" alt="post-menu" />
              </div>
            </div>
          </div>
          <div className="post_body">
            <div className="post_image">
              <img src="/images/instapost-template.jpg" alt="" />
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
                <span>120 likes</span>
              </div>
              <div className="review-description">
                <span>androidapps.development.blogs</span>
                <p>
                  Custom Image Classification on Android using Tensorflow Lite.
                  Download link:
                  https://drive.google.com/folderview?id=1zdOLALcw_GatK4VgkIGxFr6008rIk-Fq
                </p>
                <div className="users_comment_top2">
                  <div>
                    <span>goforbg</span>
                    <p>Nice</p>
                  </div>
                  <div>
                    <span>androidapps</span>
                    <p>Very Good</p>
                  </div>
                </div>
                <div className="post_time">
                    <span>1 DAY AGO</span>
                </div>
              </div>
              <div className="review-comment_box">
                <div className="post_emoji">
                  <img src="/images/emoji.png" alt="emoji post" width="28" />
                </div>
                <div className="post_comment">
                  <textarea className='autoExpand' rows='1' autofocus placeholder="Add to comment..."></textarea>
                </div>
                <div className="post_button">
                  <span>Post</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Single Post */}

        
        </div>
        <div className="container-sidebar"></div>
      </div>
    </div>
  );
};

export default Home;






