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
import { getUserData } from "../src/services/api";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
    console.log(userData);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalHeader data={userData} />
        <Routes>
          <Route path="/">
            <Route index element={<Login data={userData} />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="boardlist/:userId" element={<BoardList />}>
              <Route
                path=":postId/detail"
                element={<BoardDetail data={userData} />}
              />
            </Route>
            <Route path=":post" element={<PostForm data={userData} />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
