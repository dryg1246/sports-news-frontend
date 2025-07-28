import img from "./assets/sportsman-drinking.png"
import imgNews1 from "./assets/race-hose.png"
import imgNews2 from "./assets/cyclist-leads.png"
import imgNews3 from "./assets/boxing.png"

const TrendingNews = () => {

    const cardJson = [
        {
            id: 1,
            date: "Race98 - 03 June 2023",
            name: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
            desc: "NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week’s",
            image: imgNews1
        },
        {
            id: 2,
            date: "Race98 - 03 June 2023",
            name: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
            desc: "NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week’s",
            image: imgNews2
        },
        {
            id: 3,
            date: "Race98 - 03 June 2023",
            name: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
            desc: "NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week’s",
            image: imgNews3
        }
    ]

    const posterJson = [
        {
            id: 1,
            nameSport: "Cycling",
            name: "DISCOVER THE MEMBER BENEFITS OF USA CYCLING!",
            date: "Debits - 03 June 2023",
        },
    ]
    return (
        <section>
            <h2 className="font-sequelSans font-medium">Trending News</h2>
        <div className="flex gap-[65px]">

            <div>
                {cardJson.map((item, index) => {
                    return (
                        <div className="flex gap-[20px]">
                            <img className="w-full h-full pb-4" src={item.image} alt=""/>
                            <div>
                                <p>{item.date}</p>
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="relative  w-[570px] h-[609px] rounded-xl overflow-hidden text-white font-sans">
                <img className="absolute inset-0 w-full h-full object-cover" src={img} alt=""/>
                <div className="absolute inset-0 bg-black/50"></div>
                {posterJson.map((item, index) => {
                    return (
                        <>
                            <div
                                className="absolute top-4 left-4 border-white px-3 py-1 rounded-md backdrop-blur-sm text-sm z-10">
                                {item.nameSport}
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 z-10">
                                <p className="text-sm opacity-80">{item.date}</p>
                                <h2 className="text-xl font-extrabold uppercase mt-1">
                                    {item.name}
                                </h2>
                            </div>
                        </>

                    )
                })}

            </div>

        </div>
        </section>
    )
}

export default TrendingNews;