import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-sidespacer">
        <div className="navbar-logo">
          <img
            src="/images/insta-logo1.png"
            alt="instgram-logo"
            srcset=""
            width="103"
          />
        </div>
        <div className="navbar-search">
          <input type="text" name="search" placeholder="Search"/>
        </div>
        <div className="navbar-menu">
          <div>
            <img src="/images/home.png" alt="home-menu-icon" />
          </div>
          <div>
            <img src="/images/inbox.png" alt="inbox-menu-icon" />
          </div>
          <div>
            <img src="/images/explore.png" alt="explore-menu-icon" />
          </div>
          <div>
            <img src="/images/heart.png" alt="heart-menu-icon" />
          </div>
          <div>
            <img src="/images/avatar.png" alt="avatar-menu-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
