import styles from "./BoardList.module.scss";
import { useState, useEffect } from "react";
import { getPostData } from "../../services/api";
import PostList from "./postList/PostList";
import { Link, useParams, useNavigate } from "react-router-dom";

function BoardList() {
  const [postData, setPostData] = useState();
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostData();
        setPostData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="page-wrapper">
      <div className={styles.boardListContainer}>
        <div className={styles.boardHeader}>
          <h2>board</h2>
          <h1>자유게시판</h1>
        </div>
        <div className={styles.boardButtonContainer}>
          <button className={styles.currentBoardButton}>자유 게시판</button>
          <button>질문 게시판</button>
          <button>질문 게시판</button>
        </div>
        <PostList data={postData} />
        <button
          className={styles.writeButton}
          onClick={() => navigate(`/post`)}
        >
          글쓰기
        </button>
      </div>
    </div>
  );
}

export default BoardList;
