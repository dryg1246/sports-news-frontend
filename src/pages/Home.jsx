import MainComponent from "../MainComponent.tsx";
import Header from "../header";

const HomePage = () => {
    return (
        <div className="bg-[#F9FAFC]">
            <div className="max-w-[1200px] w-full mx-auto h-100vh gap-[25px] flex flex-col  ">
            <Header />
            <MainComponent />
        </div>
        </div>
    )
}

export default HomePage;