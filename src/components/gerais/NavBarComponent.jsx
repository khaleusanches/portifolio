import { useNavigate } from "react-router"
import icon from "../../assets/k-icon.png"
import logo from "../../../public/logo.png"
function NavBarComponent({active}){
    var navigate = useNavigate();
    return(
        <div>
            <nav className="flex justify-center items-center w-full h-[10vh] mb-8 mt-2 no-scrollbar">
                <ul className="flex items-center justify-between w-full mt-8">
                    <li className="ml-8"><img src={logo} alt="Ícone" className="w-[10vw] ml-[0vw]"/></li>
                    <div className="flex space-x-8 ml-[0vw]">
                        <li className="no-scrollbar"><a href="#" className={` border-[#fe5800] hover:border-b-2 ${active === "home" ? "border-b-2" : ""}`}>Home</a></li>
                       {/*  <li><a href="#" onClick={() => navigate("/portifolio")} className={`hover:border-b-2 border-blue-800 py-3 ${active === "portifolio" ? "border-b-2" : ""}`}>Success Cases</a></li>*/}
                        <li className="no-scrollbar"><a href="#services" className={`hover:border-b-2 border-[#fe5800] ${active === "services" ? "border-b-2" : ""}`}>Serviços</a></li> 
                        <li className="no-scrollbar"><a href="#about" className={`hover:border-b-2 border-[#fe5800] ${active === "about" ? "border-b-2" : ""}`}>Sobre Nós</a></li>
                       {/*  <li><a href="#" onClick={() => navigate("/contact")} className={`hover:border-b-2 border-blue-800 py-3 ${active === "contact" ? "border-b-2" : ""}`}>Contact</a></li>*/}

                    </div>
                        <li className="no-scrollbar py-2 h-[10vh] mr-[1vw]"><a href="https://wa.link/q560iy" target="_blank" rel="noopener noreferrer" className={`hover:bg-white hover:border-gray-800 hover:text-gray-800 font-bold border-2 rounded-[32px] pl-4 pr-4 py-2 hover:border-b-2 border-white ${active === "orcamento" ? "border-b-2" : ""}`}>Orçamento</a></li>

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