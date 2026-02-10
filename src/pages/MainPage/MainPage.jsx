import NavBarComponent from "../../components/gerais/NavBarComponent";
import BannerComponent from "../../components/MainPageComponents/BannerComponent";
function MainPage() {
    return(
        <div className="h-screen bg-gradient-to-b from-black to-gray-800 text-white">
            <NavBarComponent active="home"/>
            <BannerComponent/>
        </div>
    )
}
export default MainPage