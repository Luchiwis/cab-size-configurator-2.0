export function Hoistway() {
    return (
        <main>
            <section className="text-center">
                <div className="my-5 col-md-8 col-sm-10 mx-auto">
                    <h1 className="display-4">Enter the Hoistway size</h1>

                    <div id="unit-system">
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="unit" value="mm" id="unit-radio-mm"
                                autoComplete="off" onClick="switchUnits('mm');changeUnitsInputs()" />
                            <label className="btn btn-outline-primary" htmlFor="unit-radio-mm">metric</label>

                            <input type="radio" className="btn-check" name="unit" value="in" id="unit-radio-in"
                                autoComplete="off" onClick="switchUnits('in');changeUnitsInputs()" defaultChecked />
                            <label className="btn btn-outline-primary" htmlFor="unit-radio-in">imperial</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="width" className="form-label">Width <br /><span id="width-label" className="text-muted">min:49.5" | max:76.5"</span></label>
                            <input type="number" id="width" name="width" step="0.01"
                                className="form-control text-center" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="depth" className="form-label">Depth <br /><span id="depth-label" className="text-muted">min:50.25" | max:92.5"</span></label>
                            <input type="number" id="depth" name="depth" step="0.01"
                                className="form-control text-center" required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <select className="form-select" name="model" id="model">
                                <option defaultValue="">Model</option>
                                <option value="panorama">Panorama</option>
                                <option value="renaissance">Renaissance</option>
                                <option value="legacy">Legacy Volt</option>
                            </select>
                        </div>
                        <div className="col">
                            <select className="form-select" name="type" id="type">
                                <option defaultValue="">Type</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </div>
                        <div className="col">
                            <select className="form-select" name="door" id="door">
                                <option defaultValue="">Door type</option>
                                <option value="accordion">accordion</option>
                                <option value="bifold">bifold</option>
                                <option value="2speed">2 speed sliding</option>
                                <option value="3speed">3 speed sliding</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <section>

                <div className="my-5 col-md-8 col-sm-10 mx-auto">
                    <h4 className="text-center">Standard options:</h4>
                    <p className="text-muted text-center">Click a row to select these properties to configure the cab size</p>

                    <table className="table table-hoistway">
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Type</th>
                                <th>Door</th>
                                <th>Landing</th>
                                <th>Max cab width</th>
                                <th>Max cab depth</th>
                            </tr>
                        </thead>

                        <tbody>

                        </tbody>
                    </table>
                </div>
            </section>

            <section className="text-center py-2 my-3" id="restrictions">
                <div className="container">
                    <h4>Note:</h4>
                    <p>
                        these are just standard sizes, if nothing appear with your filters consult factory
                    </p>
                </div>
            </section>
        </main>
    )
}