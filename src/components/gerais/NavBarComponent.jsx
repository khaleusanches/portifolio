import icon from "../../assets/k-icon.png"
function NavBarComponent(){
    return(
        <div>
            <nav className="flex justify-center items-center w-full h-16 mb-8">
                <ul className="flex items-center justify-between w-full mt-8">
                    <li className="ml-8"><img src={icon} alt="Ícone" className="w-16 border-2 border-white rounded-full"/></li>
                    <div className="flex space-x-8">
                        <li><a href="#" className="border-b-2 border-blue-800 py-3">Home</a></li>
                        <li><a href="#" className="hover:border-b-2 border-blue-800 py-3">Portifolio</a></li>
                        <li><a href="#" className="hover:border-b-2 border-blue-800 py-3">About</a></li>
                        <li><a href="#" className="hover:border-b-2 border-blue-800 py-3">Services</a></li>
                        <li><a href="#" className="hover:border-b-2 border-blue-800 py-3">Contact</a></li>
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