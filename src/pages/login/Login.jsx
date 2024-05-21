import styles from "./Login.module.scss";
import eyeImg from "../../assets/eye.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [input, setInput] = useState({ email: "", pw: "", showPw: false });

  const saveInput = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleShowPw = () => {
    setInput((prevInput) => ({ ...prevInput, showPw: !prevInput.showPw }));
  };

  return (
    <div className="page-wrapper">
      <div className={styles.loginContainer}>
        <form>
          <h1>로그인</h1>
          <input
            className={styles.loginInput}
            name="email"
            type="email"
            placeholder="이메일 주소"
            value={input.id}
            onChange={saveInput}
          />
          <div className={styles.passwordContainer}>
            <input
              name="pw"
              className={styles.loginInput}
              type={input.showPw ? "text" : "password"}
              placeholder="비밀번호 입력"
              value={input.pw}
              onChange={saveInput}
            />
            <img
              className={styles.eyeIcon}
              src={eyeImg}
              alt="비밀번호 보기"
              onClick={toggleShowPw}
            />
          </div>
          <button className={styles.loginButton}>로그인</button>
        </form>
        <div className={styles.loginOption}>
          <p className={styles.findId}>아이디 찾기</p>
          <p className={styles.findPw}>비밀번호 찾기</p>
          <Link to={`/signup`} className={styles.signUpLink}>
            <p className={styles.signUp}>회원가입</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
