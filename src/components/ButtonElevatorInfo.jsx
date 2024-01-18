export function ButtonElevatorInfo({ children, model }) {
    const modelLink = {
        'renaissance': 'https://federalelevator.com/elevators/home-residential-elevators/renaissance-hydraulic-elevator/',
        'legacy': 'https://federalelevator.com/elevators/home-residential-elevators/machine-room-less-home-elevator-legacy-volt/',
        'panorama': 'https://federalelevator.com/elevators/home-residential-elevators/panorama-hydraulic-elevator/'
    }

    return (
        <button className='btn btn-secondary'>
            <a href={modelLink[model]} className="text-decoration-none text-white">{children}</a>
        </button>
    )
}