import ButtonOpenChat from "../../components/gerais/ButtonOpenChat";
import ChatBot from "../../components/gerais/ChatBot";
import NavBarComponent from "../../components/gerais/NavBarComponent";
import BannerComponent from "../../components/MainPageComponents/BannerComponent";
import ServicesComponent from "../../components/MainPageComponents/ServicesComponent";
import CatalogListComponent from "../../components/PortifolioPageComponents/CatalogListComponent"

function MainPage() {
    return(
        <div className="h-screen bg-gradient-to-b from-black to-gray-800 text-white overflow-auto pb-4">
            <NavBarComponent active="home"/>
            <BannerComponent/>
            <ServicesComponent/>
            <ChatBot/>
            <ButtonOpenChat/>
        </div>
    )
}
export default MainPage