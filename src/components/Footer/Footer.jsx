import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <p className={styles.testText}>개발자 테스트용</p>
        <div>
          <p>대표 홍길동 ㅣ 사업자 등록 번호 123-4567-890</p>
          <p>서울특별시 가가동 나나로 111-2 8층</p>
          <p>통신 판매업 신고 제 2014-서울홍홍홍 0291호</p>
        </div>
        <div>
          <p>고객지원 111-2345</p>
          <p>이메일 help@gmail.com</p>
          <p>평일 09:00 - 17:00 토,일 공휴일 휴무</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.policyContainer}>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
        </div>
        <p>Copyrightⓒ2023 Data nugget All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
