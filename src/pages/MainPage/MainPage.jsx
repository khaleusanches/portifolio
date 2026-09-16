import NavBarComponent from "../../components/gerais/NavBarComponent";
import ProjectsComponent from "../../components/MainPageComponents/ProjectsComponent";
import AboutComponent from "../../components/MainPageComponents/AboutComponent";
import BannerComponent from "../../components/MainPageComponents/BannerComponent";
import RodapeComponent from "../../components/MainPageComponents/RodapeComponent";
import ServicesComponent from "../../components/MainPageComponents/ServicesComponent";

function MainPage() {
    return(
        /* A página rola no documento, e não dentro de uma div de altura fixa. Com o
           scroll preso num contêiner, `window.scrollY` ficava sempre em zero — a
           navegação não tinha como saber que o visitante desceu — e a barra de
           rolagem estilizada do body nunca aparecia. */
        <div className="bg-base text-ink">
            <NavBarComponent/>
            <BannerComponent/>
            <ProjectsComponent/>
            <ServicesComponent/>
            <AboutComponent/>
            <RodapeComponent/>
        </div>
    )
}
export default MainPage