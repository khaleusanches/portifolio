import NavBarComponent from "../../components/gerais/NavBarComponent";

function AboutPage() {
    return (
        <div className="h-screen bg-gradient-to-b from-black to-gray-800 text-white">
            <NavBarComponent active="about"/>
            <div className="flex flex-col justify-center h-[83vh]">
                <h1 className="text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-5xl font-['Libre_Baskerville'] text-center">Em Construção...</h1>
            </div>

        </div>
    )
}
export default AboutPage