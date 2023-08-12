import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroPage from "../../pages/IntroPage";
import CatListPage from "../../pages/CatListPage";
import TipTapPage from "../../pages/TipTapPage";
import VisitChartPage from "../../pages/VisitChartPage";
import TodoListPage from "../../pages/TodoListPage";
import Menu from "../menu/Menu";

const Content = () =>{
  return (
    <div className="content-box">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/catList" element={<CatListPage />} />
          <Route path="/tiptap" element={<TipTapPage />} />
          <Route path="/visitChart" element={<VisitChartPage />} />
          <Route path="/todoList" element={<TodoListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Content;