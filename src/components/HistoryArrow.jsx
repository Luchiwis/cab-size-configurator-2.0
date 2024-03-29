// hooks
import { useEffect, useState } from "react"

export function HistoryArrow({ action = 'back' }) {
    const [icon, setIcon] = useState();
    const [handler, setHandler] = useState();
    useEffect(() => {
        if (action == 'back') {
            setIcon(
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
            )
        } else if (action == 'forward') {
            setIcon(
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
            )
        }
    }, [action])

    return (
        <button className="btn btn-primary"
            onClick={() => {
                if (action == 'back') {
                    (window.history.back())
                }else if (action == 'forward') {
                    (window.history.forward())
                }
            }}>
            {icon}
        </button>
    )
}