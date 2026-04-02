import { useNavigate } from "react-router"
import icon from "../../assets/k-icon.png"
import logo from "../../../public/logo.png"
function NavBarComponent({active}){
    var navigate = useNavigate();
    return(
        <div>
            <nav className="flex justify-center items-center w-full h-[12vh] mb-8 no-scrollbar fixed top-0 left-0 right-0 z-50 bg-black  pb-8">
                <ul className="flex items-center justify-between w-full mt-8">
                    <li className="md:ml-8 hidden mr-2 md:block"><img src={logo} alt="Ícone" className="w-[10vw] ml-[0vw]"/></li>
                    <div className="flex space-x-8 ml-[8vw] md:ml-0">
                        <li className="no-scrollbar"><a href="#" className={` border-[#fe5800] hover:border-b-2 ${active === "home" ? "border-b-2" : ""}`}>Home</a></li>
                       {/*  <li><a href="#" onClick={() => navigate("/portifolio")} className={`hover:border-b-2 border-blue-800 py-3 ${active === "portifolio" ? "border-b-2" : ""}`}>Success Cases</a></li>*/}
                        <li className="no-scrollbar"><a href="#services" className={`hover:border-b-2 border-[#fe5800] ${active === "services" ? "border-b-2" : ""}`}>Serviços</a></li> 
                        <li className="no-scrollbar"><a href="#about" className={`hover:border-b-2 border-[#fe5800] ${active === "about" ? "border-b-2" : ""}`}>Sobre</a></li>
                       {/*  <li><a href="#" onClick={() => navigate("/contact")} className={`hover:border-b-2 border-blue-800 py-3 ${active === "contact" ? "border-b-2" : ""}`}>Contact</a></li>*/}

                    </div>
                        <li className="no-scrollbar py-4 md:py-2 ml-4 h-[10vh] mr-[1vw] mt-8 sm:mt-4"><a href="https://wa.link/q560iy" target="_blank" rel="noopener noreferrer" className={`hover:bg-white hover:border-gray-800 hover:text-gray-800 font-bold border-2 rounded-[32px] pl-4 pr-4 py-2 hover:border-b-2 border-white ${active === "orcamento" ? "border-b-2" : ""}`}>Orçamento</a></li>

                    {/*     <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                       <div>
                            <select id="countries" className="block bg-transparent w-12 px-0 py-1 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                                <option value="en" selected>En</option>
                                <option value="pt-br">Pt</option>
                            </select>
                        </div> */}
                </ul>
            </nav>
        </div>
    )
}

export default NavBarComponent