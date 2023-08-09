import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroPage from "../../pages/IntroPage";
import CatListPage from "../../pages/CatListPage";
import Menu from "../menu/Menu";

const Content = () =>{
  return (
    <div className="content-box">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/catList" element={<CatListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Content;