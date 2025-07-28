import SportsHighlights from "./SportsHighlights";
import Category from "./Category";
import TrendingNews from "./TrendingNews";
import NewsBanner from "./NewsBanner";
import RecentNews from "./RecentNews";
import SportsArticle from "./SportsArticle";
import Newsletter from "./Newsletter";


const MainComponent = () => {
    return (
        <div className="flex flex-col gap-[75px] ">
            <SportsHighlights />
            <Category />
            <TrendingNews />
            <NewsBanner />
            <RecentNews />
            <SportsArticle />
            <Newsletter />
        </div>
    )
}

export default MainComponent