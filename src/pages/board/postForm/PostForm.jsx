import styles from "./PostForm.module.scss";

function PostForm() {
  return (
    <div className="page-wrapper">
      <div className={styles.postFormContainer}>
        <h1>게시글 작성</h1>
        <form>
          <label>
            제목
            <input type="text" placeholder="제목을 입력해주세요" />
          </label>
          <label>
            내용
            <input type="text" placeholder="내용을 입력해주세요" />
          </label>
          <label>
            파일 첨부
            <input type="text" placeholder="제목을 입력해주세요" />
          </label>
          <label>
            해시태그
            <input type="text" placeholder="제목을 입력해주세요" />
          </label>

          <button className={styles.postButton}>게시글 작성</button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
