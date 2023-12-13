import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import IntroPage from "../../pages/IntroPage";
import CatListPage from "../../pages/CatListPage";
import TipTapPage from "../../pages/TipTapPage";
import TodoListPage from "../../pages/TodoListPage";
import Menu from "../menu/Menu";
import { Provider } from "react-redux";
import totalStore from "../../stores/output";

import LoginPage from "../../pages/LoginPage";
import UserPage from "../../pages/UserPage";
import ErrorPage from "../../pages/ErrorPage";
import NotFoundPage from "../../pages/NotFoundPage";
import { verifyTokens } from "../../api/user";
import { fetchIsLogin, fetchUserName } from "../../stores/actions/user";

const Content = () => {
  const { isLogin } = totalStore.getState().user;
  const token = localStorage.getItem("Tokens");

  if(token!==null && !isLogin){
    verifyTokens().then(flag=>{
      if(flag){
        totalStore.dispatch(fetchUserName(flag.userName));
        totalStore.dispatch(fetchIsLogin(true));
      }else{
        console.log('다시 로그인 해주세요.')
        totalStore.dispatch(fetchIsLogin(false));
      }
    });
  }

  return (
    <div className="content-box">
      <BrowserRouter>
        <Provider store={totalStore}>
          <Menu />
        </Provider>
        <Routes>
          <Route
            path="/"
            element={<IntroPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/login"
            element={
                <Provider store={totalStore}>
                  <LoginPage />
                </Provider>
              
            }
            
            errorElement={<ErrorPage />}
          />
          <Route
            path="/user"
            element={
                <Provider store={totalStore}>
                  <UserPage />
                </Provider>

            }
            errorElement={<ErrorPage />}
          />
          <Route
            path="/catList"
            element={
              <Provider store={totalStore}>
                <CatListPage />
              </Provider>
            }
            errorElement={<ErrorPage />}
          />

          <Route
            path="/tiptap"
            element={<TipTapPage />}
            errorElement={<ErrorPage />}
          />

          <Route
            path="/todoList"
            element={
              <Provider store={totalStore}>
                <TodoListPage />
              </Provider>
            }
            errorElement={<ErrorPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Content;
