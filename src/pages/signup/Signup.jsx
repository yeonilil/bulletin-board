import styles from "./Signup.module.scss";
import eyeImg from "../../assets/eye.svg";
import { useState } from "react";

function Signup() {
  const [input, setInput] = useState({
    email: "",
    pw: "",
    pwRetry: "",
    name: "",
    showPw: false,
    isAgree: false, // 개인정보 처리 동의 여부
  });

  // 비밀번호 유효성 검사
  function validatePassword(password) {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  }

  const saveInput = (e) => {
    const { name, value, type, checked } = e.target;

    // 입력값에 따라 다르게 처리
    const newValue = type === "checkbox" ? checked : value;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: newValue,
      isValidPassword:
        name === "pw" ? validatePassword(value) : prevInput.isValidPassword,
    }));
  };

  const handlePwToggle = () => {
    setInput((prevInput) => ({ ...prevInput, showPw: !prevInput.showPw }));
  };

  return (
    <div className="page-wrapper">
      <div className={styles.signupContainer}>
        <form>
          <h1>회원가입</h1>
          <label>
            이메일
            <input
              className={styles.loginInput}
              name="email"
              type="email"
              value={input.email}
              onChange={saveInput}
            />
          </label>
          {/* 비밀번호 입력 */}
          <div className={styles.passwordContainer}>
            <label>
              비밀번호
              <input
                name="pw"
                className={`${styles.loginInput} ${
                  input.isValidPassword ? "" : styles.invalidPassword
                }`}
                type={input.showPw ? "text" : "password"}
                placeholder="8자 이상, 영문자, 숫자, 특수기호중 2가지 조합"
                value={input.pw}
                onChange={saveInput}
              />
            </label>
            <img
              className={styles.eyeIcon}
              src={eyeImg}
              alt="비밀번호 보기"
              onClick={handlePwToggle}
            />
          </div>
          {/* 비밀번호 재입력 */}
          <div className={styles.passwordRetryContainer}>
            <label>
              비밀번호 확인
              <input
                name="pwRetry"
                className={`${styles.loginInput} ${
                  input.isValidPassword ? "" : styles.invalidPassword
                }`}
                type={input.showPw ? "text" : "password"}
                placeholder="비밀번호를 다시 입력해주세요"
                value={input.pwRetry}
                onChange={saveInput}
              />
            </label>
            <img
              className={styles.eyeIcon}
              src={eyeImg}
              alt="비밀번호 보기"
              onClick={handlePwToggle}
            />
          </div>
          {/* 닉네임 입력 */}
          <label>
            닉네임
            <input
              className={styles.loginInput}
              name="name"
              type="text"
              value={input.name}
              onChange={saveInput}
            />
          </label>
          {/* 개인정보 처리 동의 */}
          <div className={styles.agreementContainer}>
            <input
              type="checkbox"
              name="isAgree"
              checked={input.isAgree}
              onChange={saveInput}
            />
            <label>개인정보 처리방침 / 데이터 활용 동의</label>
            <p>(필수)</p>
          </div>
          {/* 회원가입 버튼 */}
          <button className={styles.signUpButton} disabled={!input.isAgree}>
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
