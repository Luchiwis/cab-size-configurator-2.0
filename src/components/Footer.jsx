import '/src/css/Footer.css';

export function Footer() {
    return (
        <footer>
            <div className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

                <p className="col-md-4 mb-0 text-muted text-start" >© 2024 FEDERAL ELEVATOR.</p>

                <a href="https://federalelevator.com/"
                    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src="img/FED ELv logo_clean_cmyk.png" height="50px" alt="" />
                </a>

                <ul className="nav col-md-4 justify-content-end no-print">
                    <li className="nav-item"><a href="https://federalelevator.com/dealer-login/"
                        className="nav-link px-2 text-muted">Dealer Login</a></li>
                    <li className="nav-item"><a href="https://federalelevator.com/privacy-policy/"
                        className="nav-link px-2 text-muted">Privacy
                        Policy</a></li>
                    <li className="nav-item"><a href="https://federalelevator.com/aoda/"
                        className="nav-link px-2 text-muted">AODA</a></li>
                    <li className="nav-item"><a
                        href="https://federalelevator.com/commercial-residential-elevator-manufacturer/"
                        className="nav-link px-2 text-muted">About</a></li>
                </ul>

            </div>

        </footer>
    )
}