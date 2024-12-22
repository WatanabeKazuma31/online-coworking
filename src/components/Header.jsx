import "../App.css";

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="logo">
          <a href="/" className="logo-img">
            <img src="coworking-logo.png" alt="ロゴ" />
          </a>
        </div>
        <p className="status" id="user_status">
          ログインしていません
        </p>
      </div>
    </header>
  );
};

export default Header;
