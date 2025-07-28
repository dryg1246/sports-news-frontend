
import './index.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import TrendingNews from "./TrendingNews.js";
import TrendingNewsPage from "./pages/TrendingNewsPage.jsx";
import RecentNewsPage from "./pages/RecentNewsPage.jsx";
import ClubsRankingPage from "./pages/ClubsRankingPage.jsx";
import SportsArticlePage from "./pages/SportsArticlePage.jsx";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage/>} />
          <Route path="/trendingNews" element={<TrendingNewsPage />} />
          <Route path="/recentNews" element={<RecentNewsPage />} />
          <Route path="/clubsRanking" element={<ClubsRankingPage/>} />
          <Route path="/sportsArticle" element={<SportsArticlePage />} />
      </Routes>
    </div>
  )
}

export default App
