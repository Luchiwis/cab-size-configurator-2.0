// hooks
import { useState } from "react";

// components
import { TableHoistway } from "/src/components/TableHoistway";
import { UnitSwitch } from "/src/components/UnitSwitch";
import { Unit } from "/src/components/Unit";

// scripts
import { prettify } from "/src/logic/prettify";

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
                                    Minimum: <Unit type='in'>49.5</Unit>
                                </span>
                            </label>
                            <input type="number" id="width" name="width" step="0.25"
                                className="form-control text-center" required onChange={inputHandler} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="depth" className="form-label">Depth <br />
                                <span id="depth-label" className="text-muted">
                                    Minimum: <Unit type='in'>50.25</Unit>
                                </span>
                            </label>
                            <input type="number" id="depth" name="depth" step="0.25"
                                className="form-control text-center" required onChange={inputHandler} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <label htmlFor="model">Model:</label>
                            <select className="form-select" name="model" id="model" onChange={inputHandler}>
                                <option value="">Any</option>
                                <option value="panorama">{prettify('panorama')}</option>
                                <option value="renaissance">{prettify('renaissance')}</option>
                                <option value="legacy">{prettify('legacy')}</option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="type">Type:</label>
                            <select className="form-select" name="type" id="type" onChange={inputHandler}>
                                <option value="">Any</option>
                                <option value="A">{prettify('A')}</option>
                                <option value="B">{prettify('B')}</option>
                                <option value="C">{prettify('C')}</option>
                                <option value="D">{prettify('D')}</option>
                                <option value="E">{prettify('E')}</option>
                            </select>

                        </div>
                        <div className="col">
                            <label htmlFor="door">Door:</label>
                            <select className="form-select" name="door" id="door" onChange={inputHandler}>
                                <option value="">Any</option>
                                <option value="accordion">{prettify('accordion')}</option>
                                <option value="bifold">{prettify('bifold')}</option>
                                <option value="2speed">{prettify('2speed')}</option>
                                <option value="3speed">{prettify('3speed')}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <section>

                <div className="my-5 col-md-8 col-sm-10 mx-auto">
                    <h4 className="text-center">Standard options:</h4>
                    <p className="text-muted text-center">Click a row to select these properties and configure cab size</p>

                    <TableHoistway
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