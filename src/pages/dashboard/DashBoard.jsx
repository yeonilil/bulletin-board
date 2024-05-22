import styles from "./DashBoard.module.scss";
import PostLineChart from "./components/PostLineChart";
import HashtagPostBarChart from "./components/HashtagPostBarChart";
import HashtagRatioBarChart from "./components/HashtagRatioBarChart";
import Calender from "./components/Calender";
import logoImage from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function DashBoard({ name = "곽서연" }) {
  const postLineData = [100, 70, 170, 120, 160];
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
          <PostLineChart data={postLineData} className={styles.lineChart} />
          <HashtagPostBarChart className={styles.barChart} />
          <HashtagRatioBarChart className={styles.ratioChart} />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
