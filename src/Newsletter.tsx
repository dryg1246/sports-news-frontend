import arrow from "../src/assets/ArrowTop.png"
import img from "../src/assets/american-football-player.png"

const Newsletter = () => {
    return (
        <section className="bg-[#EBEEF3] flex justify-between items-center h-full w-full">
            <div className="pl-12">
                <h2 className="font-sequelSans font-black text-[60px] uppercase gradient-text leading-[60px]">Newsletter Subscription</h2>
                <div className="relative w-[514px] h-[58px] rounded-md flex flex-col gap-[43px]">
                    <input
                        className="w-[450px] h-full text-[21px] text-black/73 pl-4 bg-[#EBEEF3] border-2 border-black  outline-none absolute left-0"
                        type="email"
                        placeholder="smetdana12032007@gmail.com"
                        style={{ overflowX: 'hidden', textOverflow: 'ellipsis', boxSizing: 'border-box' }}
                    />
                    <button
                        className="absolute right-0 top-0 h-full w-[64px] bg-black flex items-center  justify-center z-10"
                        style={{ zIndex: 10, boxSizing: 'border-box', padding: 0 }}

                    >
                        <img className="p-1" src={arrow} alt="Submit" />
                    </button>
                </div>
            </div>
            <div>
                <img src={img} alt=""/>
            </div>
        </section>
    )
}

export default Newsletter;