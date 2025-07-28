import imgNews from "../src/assets/karate-fighters.png"
import imgNews1 from "../src/assets/Image1.png"
import imgNews2 from "../src/assets/Image2.png"
import imgNews3 from "../src/assets/Image3.png"
import {ArrowRightOutlined} from "@ant-design/icons";

const RecentNews = () => {

    const recentNewsJSON = [
        {
            id: 1,
            date: "#Pollar. 87 - 12 July 2023",
            name: "Baku 2023 Taekwondo Championships",
            image: imgNews1
        },
        {
            id: 2,
            date: "#Goft. Toni - 20 July 2023",
            name: "Open Championship Royal Liverpool Golf",
            image: imgNews2
        },
        {
            id: 3,
            date: "#Cricket. Toni - 27 July 2023",
            name: "Ireland Tour of England Test 2023",
            image: imgNews3
        }
    ]


    // const tableHead = ["Club", "W", "D", "L", "F", "A", "A"]
    const leagueData = [
        {
            position: 1,
            club: 'Manchester City',
            logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
            played: 38,
            wins: 29,
            draws: 6,
            losses: 3,
            goalsFor: 99,
            goalsAgainst: 26,
            goalDiff: 73
        },
        {
            position: 2,
            club: 'Liverpool',
            logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
            played: 38,
            wins: 28,
            draws: 8,
            losses: 2,
            goalsFor: 94,
            goalsAgainst: 26,
            goalDiff: 68
        },
        {
            position: 3,
            club: 'Chelsea',
            logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
            played: 38,
            wins: 21,
            draws: 11,
            losses: 6,
            goalsFor: 76,
            goalsAgainst: 33,
            goalDiff: 43
        },
        {
            position: 4,
            club: 'Tottenham Hotspur',
            logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg',
            played: 38,
            wins: 22,
            draws: 5,
            losses: 11,
            goalsFor: 69,
            goalsAgainst: 40,
            goalDiff: 29
        },
        {
            position: 5,
            club: 'Arsenal',
            logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
            played: 38,
            wins: 22,
            draws: 3,
            losses: 13,
            goalsFor: 61,
            goalsAgainst: 48,
            goalDiff: 13
        },
        {
            position: 6,
            club: 'Manchester United',
            logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
            played: 38,
            wins: 16,
            draws: 10,
            losses: 12,
            goalsFor: 57,
            goalsAgainst: 57,
            goalDiff: 0
        },
    ];
    return (
        <section className="px-4 py-8 flex gap-4">
            <div>
            <h3 className="text-[22px] font-bold text-gray-800 mb-4">Recent News</h3>
            <div className="flex items-center">
             <div className="flex gap-6 justify-center">

                 <div className="relative h-[300px] w-[270px]">
                     <img className="absolute inset-0 object-cover h-full w-full" src={imgNews} alt=""/>
                     {/*<div className="absolute bg-black/50 h-full inset-0"></div>*/}



                     <div className="bg-yellow-900 w-full absolute bottom-0  h-[30%]">
                     <div className="absolute  left-4 right-4 z-10 ">
                         <p className="text-[10px] opacity-80 text-white">Day 5 Highlights</p>
                         <h4 className="text-[16px] font-medium mt-1 font-sequelSans text-white">Baku 2023 World Taekwondo Championships</h4>
                     </div>
                     </div>

                 </div>

                 <div className="bg-[#EBEEF3] px-2 w-[270px] flex flex-col items-center ">
                            {recentNewsJSON.map((item, index) => {
                                return (
                                    <div className="flex items-center gap-2">
                                    <img src={item.image} alt=""/>
                                        <div>
                                            <p className="text-[10px] text-black/50">{item.date}</p>
                                            <h3 className="text-[16px] font-medium font-sequelSans ">{item.name}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                     <button className="bg-[#B8C2CE] border-0 p-2 text-white cursor-pointer rounded-sm">
                         More
                         <ArrowRightOutlined className="text-white" />
                     </button>
                 </div>
             </div>
            </div>
            </div>
                <div>
                    <h3 className="text-[22px] font-bold text-gray-800 mb-4">Clubs Ranking</h3>
                    <div className="bg-[#EBEEF3] rounded-lg shadow-sm w-[570px]">
                        <table className="min-w-full table-auto text-sm text-gray-800">
                            <thead>
                            <tr>
                                <th className="text-left px-4 py-3">Club</th>
                                <th className="px-2 py-3">GP</th>
                                <th className="px-4 py-3">W</th>
                                <th className="px-4 py-3">D</th>
                                <th className="px-4 py-3">L</th>
                                <th className="px-4 py-3">F</th>
                                <th className="px-4 py-3">A</th>
                                <th className="px-4 py-3">GD</th>
                            </tr>
                            </thead>
                            <tbody>
                            {leagueData.map((item) => (
                                <tr key={item.position} >
                                    <td className="flex items-center gap-2 px-4 py-2">
                                        <span className="font-bold">{item.position}</span>
                                        <img
                                            src={item.logo}
                                            alt={item.club}
                                            className="h-[24px] w-[24px]"
                                        />
                                        <span className="font-bold">{item.club}</span>
                                    </td>
                                    <td className="text-center px-2 py-2">{item.played}</td>
                                    <td className="text-center px-2 py-2">{item.wins}</td>
                                    <td className="text-center px-2 py-2">{item.draws}</td>
                                    <td className="text-center px-2 py-2">{item.losses}</td>
                                    <td className="text-center px-2 py-2">{item.goalsFor}</td>
                                    <td className="text-center px-2 py-2">{item.goalsAgainst}</td>
                                    <td className="text-center px-2 py-2">{item.goalDiff}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        </section>
    )
}

export default RecentNews