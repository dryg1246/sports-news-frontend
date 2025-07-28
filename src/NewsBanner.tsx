import img from "../src/assets/football.png"
import arrowRight from "../src/assets/arrow.png"
import arrowLeft from "../src/assets/arrowLeft.png"

const NewsBanner = () => {
    const bannerJson= [
        {
            id: 1,
            nameSport: "Football",
            name: "Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms",
            description: "The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals",
            date: "Agence France-Presse - 04 June 2023",
        },
    ]
    return (
        <div className="flex flex-col gap-[20px] bg-[#EBEEF3] rounded-lg">
            <div className="relative  w-full h-[518px] rounded-xl overflow-hidden text-white font-sans">
                <img className="absolute inset-0 w-full h-full object-cover rounded-none" src={img} alt=""/>
                <div className="absolute inset-0 bg-black/50"></div>
                {bannerJson.map((item, index) => {
                    return (
                        <>
                            <div
                                className="absolute top-4 left-4 border-white px-3 py-1 rounded-md backdrop-blur-sm text-sm z-10">
                                {item.nameSport}
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 z-10">
                                <p className="text-sm opacity-80">{item.date}</p>
                                <h2 className="text-4xl font-extrabold uppercase mt-1">
                                    {item.name}
                                </h2>
                                <p>{item.description}</p>
                            </div>
                        </>

                    )
                })}
            </div>
            <div className="flex justify-end gap-12 items-center">
                <div className="bg-black p-4 cursor-pointer">
                    <img src={arrowLeft} alt=""/>
                </div>
                <div className="flex justify-end gap-8 items-center">
                         <p className="bg-black p-2 rounded-full text-white text-xl font-bold">1</p>
                         <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>
                <div className="bg-black p-4 cursor-pointer mr-6">
                    <img src={arrowRight} className="" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default NewsBanner