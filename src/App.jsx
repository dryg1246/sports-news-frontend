
import './index.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import TrendingNews from "./TrendingNews.js";
import TrendingNewsPage from "./pages/TrendingNewsPage.jsx";
import RecentNewsPage from "./pages/RecentNewsPage.jsx";
import ClubsRankingPage from "./pages/ClubsRankingPage.jsx";
import SportsArticlePage from "./pages/SportsArticlePage.jsx";
import Login from "./auth/Login.js";
import ForgotPassword from "./auth/ForgotPassword.js";
import NewPassword from "./auth/NewPassword.js";
import Register from "./auth/Register.js";
import NotFoundPage from "./pages/NotFoundPage.jsx";


function App() {

  return (
      <div className="bg-[#F9FAFC] h-100vh">
      <div className="max-w-[1200px] w-full mx-auto h-100vh gap-[25px] flex flex-col">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage/>} />
          <Route path="/trendingNews" element={<TrendingNewsPage />} />
          <Route path="/recentNews" element={<RecentNewsPage />} />
          <Route path="/clubsRanking" element={<ClubsRankingPage/>} />
          <Route path="/sportsArticle" element={<SportsArticlePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
      </div>
  )
}

export default App
