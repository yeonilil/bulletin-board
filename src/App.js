import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalHeader from "./components/Header/GlobalHeader";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import DashBoard from "./pages/dashboard/DashBoard";
import BoardList from "./pages/board/BoardList";
import styles from "./styles/global.scss";
import Footer from "./components/Footer/Footer";
import BoardDetail from "./pages/board/postDetail/BoardDetail";
import PostForm from "./pages/board/postForm/PostForm";
import { useState, useEffect } from "react";
import { getPostData } from "../src/services/api";

function App() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostData();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalHeader />
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="boardlist" element={<BoardList />}>
              <Route path=":postId/detail" element={<BoardDetail />} />
            </Route>
            <Route path=":post" element={<PostForm />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
