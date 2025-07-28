import soccerBall from "./assets/soccer-ball.png"
import basketballPhoto from "./assets/basketball-photo.png"
import carSport from "./assets/sport-car.png"
import tableTennis from "./assets/table-tennis.png"

const Category = () => {
    return (
        <div>
             <h2 className="font-sequelSans font-medium">Category</h2>

            <div className="flex gap-[30px]">
            <div className="flex flex-col gap-[30px]">
                <div className="bg-[#E1E8F0]  p-2 rounded-[6px]">
                    <p className="font-black font-sequelSans gradient-text text-center text-[37px] uppercase">Football</p>
                </div>
                <img src={soccerBall} alt=""/>
            </div>
            <div className="flex flex-col gap-[30px]">
                <img src={basketballPhoto} alt=""/>
                <div className="bg-[#E1E8F0]   p-2 rounded-[6px]">
                    <p className="font-black  font-sequelSans gradient-text text-center text-[37px] uppercase">bascket <br /> ball</p>
                </div>
            </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="bg-[#E1E8F0]  p-2 rounded-[6px]">
                        <p className="font-black font-sequelSans gradient-text text-center text-[37px] uppercase">car sport</p>
                    </div>
                    <img src={carSport} alt=""/>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <img src={tableTennis} alt=""/>
                    <div className="bg-[#E1E8F0] leading-[45px] rounded-[6px]">
                        <p className="font-black font-sequelSans leading-[35px] gradient-text text-center text-[37px] uppercase">Table <br /> Tennis</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Category