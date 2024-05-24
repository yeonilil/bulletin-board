import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalHeader from "./components/Header/GlobalHeader";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import DashBoard from "./pages/dashboard/DashBoard";
import BoardList from "./pages/board/BoardList";
import styles from "./styles/global.scss";
import Footer from "./components/Footer/Footer";
import BoardDetail from "./pages/board/components/BoardDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalHeader />
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route index path="signup" element={<Signup />} />
            <Route index path="dashboard" element={<DashBoard />} />
            <Route path="boardlist" element={<BoardList />}>
              <Route index element={<BoardList />} />
              <Route path=":id/detail" element={<BoardDetail />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
