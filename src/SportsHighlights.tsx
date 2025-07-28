import basketballBall from './assets/basketball_ball.png';
import basketballPlayer from './assets/basketball-player.png'
import news from './assets/img.png'


const SportsHighlights = () => {
    return (
        <section className="relative flex justify-between ">
            <div className="flex relative">
                <div className="relative">
                    <img className="absolute left-0 top-0 z-0" src={basketballBall} alt="fff" />
                    <h2 className="gradient-text font-sequelSans leading-[75px] font-black text-[80px] uppercase z-10 whitespace-nowrap">
                        Top <br /> scorer to <br /> the final <br /> match
                    </h2>
                </div>
                <div className="flex flex-col">
                    <img className="absolute left-[14rem]  z-0" src={basketballPlayer} alt=""/>
                    <div className="text-center mt-4 flex flex-col ">
                        <p className="">The EuroLeague Finals Top Scorer is the <br/> individual award for the player that gained <br/> the highest points in the EuroLeague Finals</p>
                        <a href="/" className="underline text-[#E1E8F0] bg-[#262626]  py-[12px] px-[32px] font-bold font-sequelSans text-[20px] uppercase text-center rounded-[6px]">continue reading</a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 items-start">
                <span className="bg-[#E1E8F0] text-[#B8C2CE] px-[16px] py-[4px] rounded-[3px] text-[20px]">Today</span>
                <div
                    className="bg-no-repeat bg-cover w-64 h-64 flex items-center justify-center relative"
                    style={{
                        backgroundImage: `
      linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(255,255,255,1) 100%),
      url(${news})
    `
                    }}
                >
                    <div className="absolute bottom-4 left-4 right-4 text-black flex flex-col">
                        <p className="text-[10px]  text-gray-500">Race98 – 03 June 2023</p>
                        <h3 className="text-[16px] font-semibold leading-snug">
                            Ethiopian runners took the top four spots.
                        </h3>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-black flex flex-col">
                        <p className="text-[10px]  text-gray-500">Race98 – 03 June 2023</p>
                        <h3 className="text-[16px] font-semibold leading-snug">
                            Ethiopian runners took the top four spots.
                        </h3>
                    </div>
                </div>
                <div
                    className="bg-no-repeat bg-cover w-64 h-64 flex items-center justify-center relative"
                    style={{
                        backgroundImage: `
      linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(255,255,255,1) 100%),
      url(${news})
    `
                    }}
                >
                    <div className="absolute bottom-4 left-4 right-4 text-black flex flex-col">
                        <p className="text-[10px]  text-gray-500">Race98 – 03 June 2023</p>
                        <h3 className="text-[16px] font-semibold leading-snug">
                            Ethiopian runners took the top four spots.
                        </h3>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-black flex flex-col">
                        <p className="text-[10px]  text-gray-500">Race98 – 03 June 2023</p>
                        <h3 className="text-[16px] font-semibold leading-snug">
                            Ethiopian runners took the top four spots.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SportsHighlights