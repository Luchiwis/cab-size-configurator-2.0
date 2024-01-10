export function Results() {
    return (
        <main>
            <div className="container text-center">
                <div className="row">
                    <h1 className="display-4">Your elevator properties</h1>
                    <div id="unit-system">
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="unit" value="mm" id="unit-radio-mm"
                                autoComplete="off" onClick="switchUnits('mm');displayResults()" />
                            <label className="btn btn-outline-primary" htmlFor="unit-radio-mm">metric</label>

                            <input type="radio" className="btn-check" name="unit" value="in" id="unit-radio-in"
                                autoComplete="off" onClick="switchUnits('in');displayResults()" defaultChecked />
                            <label className="btn btn-outline-primary" htmlFor="unit-radio-in">imperial</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6 mx-auto my-1">
                        <ul className="list-group">
                            <li className="list-group-item">Model: <span id="model"></span></li>
                            <li className="list-group-item">Type: <span id="type"></span></li>
                            <li className="list-group-item">Door: <span id="door"></span></li>
                            <li className="list-group-item">Landing: <span id="landing"></span></li>
                            <li className="list-group-item">Overhead: <span id="overhead"></span></li>
                            <li className="list-group-item">Inner height: <span id="height"></span></li>
                            <li className="list-group-item">Pit depth: <span id="pit-depth"></span></li>

                        </ul>
                    </div>
                    <div className="col-lg-6 mx-auto my-1">

                        <table className="table mx-auto">
                            <thead>
                                <tr>
                                    <th scope="col" className="col-3"></th>
                                    <th scope="col">Width</th>
                                    <th scope="col">Depth</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Interior Cab Size</td>
                                    <td id="inner-width-table-label">-</td>
                                    <td id="inner-depth-table-label">-</td>
                                </tr>
                                <tr>
                                    <td>Hoistway Size</td>
                                    <td id="hoistway-width-table-label">-</td>
                                    <td id="hoistway-depth-table-label">-</td>
                                </tr>
                                <tr>
                                    <td>Platform Size</td>
                                    <td id="overall-width-table-label">-</td>
                                    <td id="overall-depth-table-label">-</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="shareSeciton mt-5">
                            <button className="btn btn-secondary"
                                onClick="navigator.clipboard.writeText(document.URL);document.querySelector('#copiedIcon').classList.remove('d-none')">copy
                                link to share
                                <svg id="copiedIcon" className="d-none bi bi-clipboard-check-fill" xmlns="http://www.w3.org/2000/svg" width="16"
                                    height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                </svg>
                            </button>
                            <br />
                            <button className="btn btn-secondary my-2" onClick={print}>save as PDF</button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}