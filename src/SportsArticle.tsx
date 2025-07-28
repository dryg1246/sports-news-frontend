import avatar1 from "../src/assets/avatar1.png"
import avatar2 from "../src/assets/avatar2.png"
import avatar3 from "../src/assets/avatar3.png"

import image1 from "../src/assets/basketball-equipment.png"
import image2 from "../src/assets/hockey-players.png"
import image3 from "../src/assets/badminton-racquet.png"

const SportsArticle = () => {

    const sportsArticleJSON = [
        {
            id: 1,
            image: image1,
            category: "Basketball",
            name: "Jake Will.",
            avatar: avatar1,
            date: "04 June 2023",
            text: "5 Exercises Basketball Players Should Be Using To Develop Strength",
            description: "This article was written by Jake Willhoite from Healthlisted.com " +
                "Strength in basketball isn’t all about a massive body mass or ripped muscles.",
        },
        {
            id: 2,
            image: image2,
            category: "Hockey",
            name: "Foxi.zacon",
            avatar: avatar2,
            date: "03 June 2023",
            text: "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
            description: "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
        },
        {
            id: 3,
            image: image3,
            category: "Badminton",
            name: "Bong Lozada",
            avatar: avatar3,
            date: "01 June 2023",
            text: "‘Outdoor’ Badminton Gets Support From Local Federation",
            description: "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.",
        }
    ]

    return (
        <section>
            <div>
            <div>
                <h2>Sports Article</h2>
                <div className="flex gap-4">
                {sportsArticleJSON.map((item, index) => (
                    <div className="flex flex-col w-full max-w-sm gap-[28px]">
                        <div className="relative w-full h-[248px]">
                            <img
                                src={item.image}
                                alt=""
                                className="w-full h-full object-cover rounded"
                            />
                            <p className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                                {item.category}
                            </p>
                        </div>
                        <div className="flex flex-col ">
                            <div className="flex gap-4 items-center">
                                <img src={item.avatar} alt="avatar"/>
                                <p className="font-sequelSans text-black text-[14px] ">{item.name}</p>
                            </div>
                             <p className="text-black/60 text-[14px]">{item.date}</p>
                            <div>
                                <h3 className="">{item.text}</h3>
                                <p className="text-black/60 text-[16px]">{item.description}</p>
                            </div>
                        </div>
                    </div>

                ))}
                </div>

            </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default SportsArticle;