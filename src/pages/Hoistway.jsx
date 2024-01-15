import { UnitSwitch } from "../components/UnitSwitch";
import { Unit } from "../components/Unit";
import { TableOptions } from "../components/ReactiveTable";
import { useState } from "react";

export function Hoistway() {
    const [hoistwayWidth, setHoistwayWidth] = useState(0);
    const [hoistwayDepth, setHoistwayDepth] = useState(0);
    const [model, setModel] = useState(undefined);
    const [type, setType] = useState(undefined);
    const [door, setDoor] = useState(undefined);

    const inputHandler = (e) => {
        if (e.target.id == 'width') {
            setHoistwayWidth(e.target.value);
        } else if (e.target.id == 'depth') {
            setHoistwayDepth(e.target.value);
        } else if (e.target.id == 'model') {
            setModel(e.target.value);
        } else if (e.target.id == 'type') {
            setType(e.target.value);
        } else if (e.target.id == 'door') {
            setDoor(e.target.value);
        }
    }

    return (
        <main>
            <section className="text-center">
                <div className="my-5 col-md-8 col-sm-10 mx-auto">
                    <h2 className="display-6">Enter the Hoistway size</h2>
                    <UnitSwitch />
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="width" className="form-label">Width <br />
                                <span id="width-label" className="text-muted">
                                    min: <Unit type='in'>49.5</Unit>
                                    {/* |max: <Unit type='in'>76.5</Unit> */}
                                </span>
                            </label>
                            <input type="number" id="width" name="width" step="0.01"
                                className="form-control text-center" required onChange={inputHandler} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="depth" className="form-label">Depth <br />
                                <span id="depth-label" className="text-muted">
                                    min: <Unit type='in'>50.25</Unit>
                                    {/* |max: <Unit type='in'>92.5</Unit> */}
                                </span>
                            </label>
                            <input type="number" id="depth" name="depth" step="0.01"
                                className="form-control text-center" required onChange={inputHandler} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <label htmlFor="model">Model:</label>
                            <select className="form-select" name="model" id="model" onChange={inputHandler}>
                                <option defaultValue=""></option>
                                <option value="panorama">Panorama</option>
                                <option value="renaissance">Renaissance</option>
                                <option value="legacy">Legacy Volt</option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="type">Type:</label>
                            <select className="form-select" name="type" id="type" onChange={inputHandler}>
                                <option defaultValue=""></option>
                                <option value="A">A (front only)</option>
                                <option value="B">B (front + rear)</option>
                                <option value="C">C (front + side)</option>
                                <option value="D">D (front + side)</option>
                                <option value="E">E (front + rails on back wall)</option>
                            </select>

                        </div>
                        <div className="col">
                            <label htmlFor="door">Door:</label>
                            <select className="form-select" name="door" id="door" onChange={inputHandler}>
                                <option defaultValue=""></option>
                                <option value="accordion">Accordion</option>
                                <option value="bifold">Bi-Fold</option>
                                <option value="2speed">2 Speed Sliding</option>
                                <option value="3speed">3 Speed Sliding</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <section>

                <div className="my-5 col-md-8 col-sm-10 mx-auto">
                    <h4 className="text-center">Standard options:</h4>
                    <p className="text-muted text-center">Click a row to select these properties to configure the cab size</p>

                    <TableOptions
                        hoistwayWidth={hoistwayWidth}
                        hoistwayDepth={hoistwayDepth}
                        model={model}
                        type={type}
                        door={door}
                    />
                </div>
            </section>

        </main>
    )
}