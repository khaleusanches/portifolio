import Container from "../gerais/Container"
import RedesSociaisComponent from "../gerais/RedesSociaisComponent"

function RodapeComponent() {
    return (
        <footer className="border-t border-line/10 py-10">
            <Container className="flex flex-wrap items-center justify-between gap-6">
                <p className="text-sm text-muted">Copyright © 2026 Khaléu Sanches Mancini</p>
                <RedesSociaisComponent />
            </Container>
        </footer>
    )
}

export default RodapeComponent
