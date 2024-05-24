import styles from "./PostForm.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    postId: undefined,
    Title: "",
    Author: "",
    Content: "",
    PostedTime: undefined,
    Hashtag: [],
  });
  const onChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventdefault();
    //post 함수
  };

  //게시한 시간 함께 보내는 함수  (handleFormSubmit 안에)

  // postId 기존 아이디에 추가해서 생성하는 함수 (handleFormSubmit 안에)

  return (
    <div className="page-wrapper">
      <div className={styles.postFormContainer}>
        <h1>게시글 작성</h1>
        <form onSubmit={handleFormSubmit} className={styles.postForm}>
          <div className={styles.inputLabelContainer}>
            <label>제목 </label>
            <input
              name="Title"
              type="text"
              value={formData.Title}
              placeholder="제목을 입력해주세요"
              onChange={onChange}
            />
          </div>
          <div className={styles.inputLabelContainer}>
            <label>내용 </label>
            <input
              name="Content"
              type="text"
              value={formData.Content}
              className={styles.contentInput}
              placeholder="내용을 입력해주세요"
              onChange={onChange}
            />
          </div>
          <div className={styles.inputLabelContainer}>
            <label>파일 첨부 </label>
            <input name="File" type="file" />
          </div>
          <div className={styles.inputLabelContainer}>
            <label>해시태그 </label>
            <input
              name="Hashtag"
              type="text"
              value={formData.Hashtag}
              placeholder="제목을 입력해주세요"
              onChange={onChange}
            />
          </div>

          <button className={styles.postButton}>게시글 작성</button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
