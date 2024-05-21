import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalHeader from "./components/Header/GlobalHeader";
import Login from "./pages/login/Login";
import DashBoard from "./pages/dashboard/DashBoard";
import BoardList from "./pages/board/BoardList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalHeader />
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route index element={<DashBoard />} />
            <Route path="board">
              <Route index element={<BoardList />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
