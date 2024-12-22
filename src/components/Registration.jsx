// import { Link } from "react-router-dom";
import "../App.css";
import "../css/Style.module.css";
// import Button from "../css/Button.module.css";
// import Top from "../css/Top.module.css";
// import RegistrationCss from "../css/Registration.module.css";

const Registration = () => {
  return (
    <section className="top">
      <div className="section-inner">
        <h2 className="section-title">新規会員登録</h2>
        <form action="post">
          <div>
            <label htmlFor="">登録方法</label>
            <input type="radio" />
            法人として登録する
            <input type="radio" />
            個人として登録する
          </div>

          <div>
            <label htmlFor="">メールアドレス</label>
            <input type="email" name="" id="" />
          </div>

          <div>
            <label htmlFor="">メールアドレス（確認）</label>
            <input type="email" name="" id="" />
          </div>

          <div>
            <label htmlFor="">パスワード</label>
            <input type="password" name="" id="" />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Registration;
