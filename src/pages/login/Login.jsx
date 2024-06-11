import styles from "./Login.module.scss";
import eyeImg from "../../assets/eye.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(userData) {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", pw: "", showPw: false });

  // 유효성 검사
  const isInvalid =
    input.email.includes("@") &&
    input.email.includes(".") &&
    input.pw.length >= 6;

  // 입력받은 값 저장
  const saveInput = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(userData);
  // 로그인 버튼 클릭 시
  const onClick = (e) => {
    e.preventDefault(); // 폼 제출 방지
    if (userData.data && userData.data.length > 0) {
      const user = userData.data.find((data) => data.userEmail === input.email);
      if (user && user.userPw === input.pw) {
        navigate(`/boardlist/${user.userId}`);
      } else {
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
      }
    } else {
      alert("사용자 데이터가 없습니다.");
    }
  };

  // 비밀번호 보기
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
            value={input.email}
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
          <button
            className={styles.loginButton}
            onClick={onClick}
            disabled={!isInvalid}
          >
            로그인
          </button>
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
