import { useNavigate } from "react-router"
import icon from "../../assets/k-icon.png"
function NavBarComponent({active}){
    var navigate = useNavigate();
    return(
        <div>
            <nav className="flex justify-center items-center w-full h-[7vh] mb-8">
                <ul className="flex items-center justify-between w-full mt-8">
                    <li className="ml-8"><img src={icon} alt="Ícone" className="w-16 border-2 border-white rounded-full"/></li>
                    <div className="flex space-x-8">
                        <li><a href="#" onClick={() => navigate("/")} className={`border-blue-800 py-3 hover:border-b-2 ${active === "home" ? "border-b-2" : ""}`}>Home</a></li>
                        <li><a href="#" onClick={() => navigate("/portifolio")} className={`hover:border-b-2 border-blue-800 py-3 ${active === "portifolio" ? "border-b-2" : ""}`}>Portifolio</a></li>
                        <li><a href="#" onClick={() => navigate("/about")} className={`hover:border-b-2 border-blue-800 py-3 ${active === "about" ? "border-b-2" : ""}`}>About</a></li>
                        <li><a href="#" onClick={() => navigate("/services")} className={`hover:border-b-2 border-blue-800 py-3 ${active === "services" ? "border-b-2" : ""}`}>Services</a></li>
                        <li><a href="#" onClick={() => navigate("/contact")} className={`hover:border-b-2 border-blue-800 py-3 ${active === "contact" ? "border-b-2" : ""}`}>Contact</a></li>
                    </div>
                    <div className="flex items-center space-x-4 mr-8">
                        <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                        <div>
                            <select id="countries" className="block bg-transparent w-12 px-0 py-1 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                                <option value="en" selected>En</option>
                                <option value="pt-br">Pt</option>
                            </select>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default NavBarComponent