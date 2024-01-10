import { ButtonCopyURL } from "../components/ButtonCopyURL";
import { ButtonSavePDF } from "../components/ButtonSavePDF";

export function Result() {
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
                            <ButtonCopyURL>copy URL to share</ButtonCopyURL>
                            <br />
                            <ButtonSavePDF></ButtonSavePDF>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}