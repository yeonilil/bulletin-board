import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalHeader from "./components/Header/GlobalHeader";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import DashBoard from "./pages/dashboard/DashBoard";
import BoardList from "./pages/board/BoardList";
import styles from "./styles/global.scss";
import Footer from "./components/Footer/Footer";

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
            <Route path="boardlist">
              <Route index element={<BoardList />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
