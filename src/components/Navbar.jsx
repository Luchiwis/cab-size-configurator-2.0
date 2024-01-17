//components
import { Link } from "react-router-dom";
import { HistoryArrow } from "./HistoryArrow";

//hooks

export function Navbar() {
    return (
        <nav className="text-center no-print d-flexbox">
            <div className="border-bottom p-2">
                <h1 className="display-4 underlineshadow d-inline">
                    <HistoryArrow action="back" />
                </h1>
                <h1 className="display-4 underlineshadow d-inline">
                    <Link to="/" className="nav-link d-inline-block mx-5">Cab Size Configurator</Link>
                </h1>
                <h1 className="display-4 underlineshadow d-inline">
                    <HistoryArrow action="forward" />
                </h1>
            </div>
        </nav >
    )
}