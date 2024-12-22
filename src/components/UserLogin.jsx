import { Link } from "react-router-dom";
import "../App.css";
import "../css/Style.module.css";
import Button from "../css/Button.module.css";
import Top from "../css/Top.module.css";
import Login from "../css/Login.module.css";

const UserLogin = () => {
  return (
    <section className="top">
      <div className="section-inner">
        <h2 className="section-title">ログイン</h2>
        <ul>
          <li>
            <Link
              to="/registration"
              className={`${Button["main-button"]} ${Top["button"]}`}
            >
              新規会員登録
            </Link>
          </li>
          <li>
            <Link
              to="/userlogin"
              className={`${Button["main-button"]} ${Top["button"]}`}
            >
              マイページ／ログイン
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default UserLogin;
