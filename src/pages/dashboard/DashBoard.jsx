import styles from "./DashBoard.module.scss";
import PostLineChart from "./components/PostLineChart";
import HashtagPostBarChart from "./components/HashtagPostBarChart";
import HashtagRatioBarChart from "./components/HashtagRatioBarChart";
import Calender from "./components/Calender";

function DashBoard() {
  const postLineData = [100, 70, 170, 120, 160];
  return (
    <div className="page-wrapper">
      <Calender />
      <PostLineChart data={postLineData} />
      <HashtagPostBarChart />
      <HashtagRatioBarChart />
    </div>
  );
}

export default DashBoard;
