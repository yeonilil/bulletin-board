import styles from "./GlobalHeader.module.scss";
import logoImage from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function GlobalHeader() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/");
  };

  const [isLogin, setIsLogin] = useState(false);

  if (window.location.pathname === "/dashboard") return null;

  return (
    <header className={styles.header}>
      <div className={styles.logoNav}>
        <Link to={`/`}>
          <img className={styles.logoImg} src={logoImage} alt="Testsite" />
        </Link>
        <nav>
          <ul className={styles.categoryMenu}>
            <li key={"게시판"}>
              <Link to={`/board`} className={styles.navLink}>
                게시판
              </Link>
            </li>
            <li key={"대시보드"}>
              <Link to={`/dashboard`} className={styles.navLink}>
                대시보드
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isLogin ? (
        <p className={styles.loginInfo}>곽서연님</p>
      ) : (
        <button className={styles.loginButton} onClick={goToLogin}>
          로그인
        </button>
      )}
    </header>
  );
}

export default GlobalHeader;
