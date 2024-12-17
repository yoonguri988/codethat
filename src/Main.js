import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import CoursePage from "./pages/CoursePage";
import WishlistPage from "./pages/WishlistPage";
import QuestionPage from "./pages/QuestionPage";
import QuestionListPage from "./pages/QuestionListPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="courses" element={<CourseListPage />} />
          <Route
            path="courses/react-frontend-development"
            element={<CoursePage />}
          />
          <Route path="questions" element={<QuestionListPage />} />
          <Route path="questions/616825" element={<QuestionPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
