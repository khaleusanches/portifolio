import NavBarComponent from "../../components/gerais/NavBarComponent"
import CatalogListComponent from "../../components/PortifolioPageComponents/CatalogListComponent"

function PortifolioPage() {
    return (
        <div className="h-screen bg-gradient-to-b from-black to-gray-800 text-white">
            <NavBarComponent/>
            <CatalogListComponent/>
            
        </div>
    )
}

export default PortifolioPage