import {Link} from "react-router-dom";


const Header = () => {
    const pages= ['Home', 'Category', 'Trending News', 'Recent News', 'Clubs Ranking', 'Sports Article']
    const linkPages = ['home', 'category', 'trendingNews', 'recentNews', 'clubsRanking', 'sportsArticle'];
    return (
        <header className="flex items-center justify-between w-full">


            <div className="flex items-center gap-[65px]">

            <h1 className="font-bebas text-[42px]">Sport News</h1>
            <div className="flex gap-[19px] list-none ">
                {/*<li>Home</li>*/}
                {/*<li>Category</li>*/}
                {/*<li>Trending News</li>*/}
                {/*<li>Recent News</li>*/}
                {/*<li>Clubs Ranking</li>*/}
                {/*<li>Sports Article</li>*/}
                {pages.map((page, i) => (
                        <Link to={`/${linkPages[i]}`} className="text-[#262626] opacity-60 text-[15px] p-[10px] cursor-pointer" key={i}>{page}</Link>
                ))}
            </div>
            </div>
            <button className="bg-[#B8C2CE] border-0 rounded-[6px] w-full max-w-[100px] cursor-pointer ">
                {/*<img src="" alt=""/>*/}
                <p className="text-white text-[14px]">Login</p>
            </button>
        </header>
    )
}

export default Header