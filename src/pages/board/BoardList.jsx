import styles from "./BoardList.module.scss";
import postList from "./components/postList";
import { useState, useEffect } from "react";
import { getPostData } from "../../services/api";

function BoardList() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const Data = getPostData();
    setPostData(Data);
  }, []);

  console.log(postData); // promise 객체 객체로 수정
  return (
    <div className="page-wrapper">
      <div className={styles.boardHeader}>
        <h2>board</h2>
        <h1>자유게시판</h1>
      </div>
      <div className={styles.boardButtonContainer}>
        <button className={styles.currentBoardButton}>자유 게시판</button>
        <button>질문 게시판</button>
        <button>질문 게시판</button>
      </div>
      <postList data={postData} />
      <button className={styles.writeButton}>글쓰기</button>
    </div>
  );
}

export default BoardList;
