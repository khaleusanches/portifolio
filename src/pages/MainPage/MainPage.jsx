import ButtonOpenChat from "../../components/gerais/ButtonOpenChat";
import ChatBot from "../../components/gerais/ChatBot";
import NavBarComponent from "../../components/gerais/NavBarComponent";
import AboutComponent from "../../components/MainPageComponents/AboutComponent";
import BannerComponent from "../../components/MainPageComponents/BannerComponent";
import RodapeComponent from "../../components/MainPageComponents/RodapeComponent";
import ServicesComponent from "../../components/MainPageComponents/ServicesComponent";
import CatalogListComponent from "../../components/PortifolioPageComponents/CatalogListComponent"

function MainPage() {
    return(
        <div className="h-screen bg-gradient-to-b from-black to-gray-800 text-white overflow-y-auto pb-4">
            <NavBarComponent active="home"/>
            <BannerComponent/>
            <ServicesComponent/>
            <AboutComponent/>
            <RodapeComponent/>
            <ChatBot/>
            <ButtonOpenChat/>
        </div>
    )
}
export default MainPage