import styles from "./BoardDetail.module.scss";
import { useParams } from "react-router-dom";

function BoardDetail() {
  const { postId } = useParams();
  return <div className="page-wrapper"></div>;
}

export default BoardDetail;
