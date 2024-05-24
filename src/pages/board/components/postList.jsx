import styles from "./PostList.module.scss";
import { Link } from "react-router-dom";

function extractDate(postedTime) {
  const dateRegex = /\d{4}-\d{2}-\d{2}/;
  const dateMatch = postedTime.match(dateRegex);
  return dateMatch ? dateMatch[0] : "";
}
function PostList({ data }) {
  console.log(data);
  if (!data) {
    return null;
  }
  return (
    <div className="page-wrapper">
      <ul className={styles.list}>
        <li>
          <div className={styles.contentListTitle}>
            <div className={styles.id}> No</div>
            <div className={styles.title}>제목</div>
            <div className={styles.author}>작성자 </div>
            <div className={styles.postedTime}>작성시간</div>
            <div className={styles.views}>조회수</div>
          </div>
        </li>
        {data.map((item, idx) => (
          <li key={idx}>
            <div className={styles.contentList}>
              <div className={styles.id}> {item.id} </div>
              <div className={styles.title}>
                <Link
                  to={`/boardlist/${item.id}/detail`}
                  className={styles.titleLink}
                >
                  {item.Title}
                </Link>
              </div>
              <div className={styles.author}> {item.Author} </div>
              <div className={styles.postedTime}>
                {extractDate(item.PostedTime)}
              </div>
              <div className={styles.views}> {item.Views} </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
