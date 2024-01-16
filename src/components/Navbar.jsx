import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="text-center no-print">
            <div className="border-bottom p-2">
                <h1 className="display-4 underlineshadow">
                    <Link to="/" className="nav-link">Cab Size Configurator</Link>
                </h1>
            </div>
        </nav>
    )
}