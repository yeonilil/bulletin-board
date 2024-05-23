import styles from "./DashBoard.module.scss";
import PostLineChart from "./components/PostLineChart";
import HashtagBarChart from "./components/HashtagPostBarChart";
import HashtagRatioBarChart from "./components/HashtagRatioBarChart";
import Calender from "./components/Calender";
import logoImage from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function DashBoard({ name = "곽서연" }) {
  const postLineData = [100, 70, 170, 120, 160];
  const hashtagData = [
    { hashtag: "#유머", count: 110 },
    { hashtag: "#개그", count: 160 },
    { hashtag: "#유머", count: 180 },
    { hashtag: "#유머", count: 40 },
    { hashtag: "#구매짱", count: 110 },
  ];
  return (
    <div className="page-wrapper">
      <div className={styles.boardNav}>
        <Link to={`/`}>
          <img className={styles.logoImg} src={logoImage} alt="Testsite" />
        </Link>
        <ul>
          <li>테스트 대시보드</li>
          <li className={styles.boardMenu}> 기본 대시보드 </li>
        </ul>
      </div>
      <div className={styles.boardHeader}>
        <p>기본 대시보드</p>
        <p>{name}님</p>
      </div>
      <div className={styles.dashboardContainer}>
        <Calender />
        <div className={styles.chartContainer}>
          <div>
            <p>날짜별 게시글 등록 수</p>
            <PostLineChart data={postLineData} className={styles.lineChart} />
          </div>
          <div>
            <p>해시태그별 게시글 등록 수</p>
            <HashtagBarChart data={hashtagData} className={styles.barChart} />
          </div>
          <div>
            <p>해시태그별 게시글 등록 수</p>
            <HashtagRatioBarChart className={styles.ratioChart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
