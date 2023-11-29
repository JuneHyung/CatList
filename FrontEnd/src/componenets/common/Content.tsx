import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import IntroPage from "../../pages/IntroPage";
import CatListPage from "../../pages/CatListPage";
import TipTapPage from "../../pages/TipTapPage";
import TodoListPage from "../../pages/TodoListPage";
import Menu from "../menu/Menu";
import { Provider } from "react-redux";
import catStore from "../../stores/output/cat/store";
import todoStore from "../../stores/output/todo/store";
import userStore from "../../stores/output/user/store";
import LoginPage from "../../pages/LoginPage";
import UserPage from "../../pages/UserPage";
import ErrorPage from "../../pages/ErrorPage";
import NotFoundPage from "../../pages/NotFoundPage";

const Content = () => {
  const { isLogin } = userStore.getState();
  console.log(isLogin);
  return (
    <div className="content-box">
      <BrowserRouter>
        <Provider store={userStore}>
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
                <Provider store={userStore}>
                  <LoginPage />
                </Provider>
              
            }
            
            errorElement={<ErrorPage />}
          />
          <Route
            path="/user"
            element={
                <Provider store={userStore}>
                  <UserPage />
                </Provider>

            }
            errorElement={<ErrorPage />}
          />
          <Route
            path="/catList"
            element={
              <Provider store={catStore}>
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
              <Provider store={todoStore}>
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
