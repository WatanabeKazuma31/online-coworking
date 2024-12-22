import { Link } from "react-router-dom";
import "../App.css";
import "../css/Style.module.css";
import Button from "../css/Button.module.css";
import Top from "../css/Top.module.css";

const Home = () => {
  return (
    <section className={Top.home}>
      <div className="section-inner">
        <h2 className="section-title">HOME</h2>
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

export default Home;
