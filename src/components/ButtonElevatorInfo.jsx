export function ButtonElevatorInfo({ children, model }) {
    const modelLink = {
        'renaissance': 'https://federalelevator.com/elevators/home-residential-elevators/renaissance-hydraulic-elevator/',
        'legacy': 'https://federalelevator.com/elevators/home-residential-elevators/machine-room-less-home-elevator-legacy-volt/',
        'panorama': 'https://federalelevator.com/elevators/home-residential-elevators/panorama-hydraulic-elevator/'
    }

    return (
        <button className='btn btn-secondary'>
            <a href={modelLink[model]} className="text-decoration-none text-white">{children}</a> &nbsp;

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
        </button>
    )
}