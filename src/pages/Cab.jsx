import { FormPrepend } from "../components/FormPrepend"
import { UnitSwitch } from "../components/UnitSwitch"
import { Unit } from "../components/Unit"
import { unit } from "/hooks/Units.js"
import { useEffect, useState } from "react"
import { useElevatorParams } from "../../hooks/useElevatorParams"
import { filterObjects, getRanges } from "../logic/dbManager"
import { ReactiveTable } from "../components/ReactiveTable"

export function Cab() {
    const elevatorParams = useElevatorParams();
    const [inputWidth, setinputWidth] = useState(0);
    const [inputDepth, setinputDepth] = useState(0);
    const [minWidth, setMinWidth] = useState(0);
    const [maxWidth, setMaxWidth] = useState(0);
    const [minDepth, setMinDepth] = useState(0);
    const [maxDepth, setMaxDepth] = useState(0);
    const [defaultWidth, setDefaultWidth] = useState(undefined);
    const [defaultDepth, setDefaultDepth] = useState(undefined);

    const inputHandler = (e) => {
        if (e.target.id == 'cab-width') {
            setinputWidth(e.target.value);
        } else if (e.target.id == 'cab-depth') {
            setinputDepth(e.target.value);
        }
    }

    useEffect(() => {
        const objects = filterObjects(elevatorParams);
        const gotRanges = getRanges(objects);
        setMinWidth(gotRanges.minOverallWidth);
        setMaxWidth(gotRanges.maxOverallWidth);
        setMinDepth(gotRanges.minOverallDepth);
        setMaxDepth(gotRanges.maxOverallDepth);
    }, []);

    useEffect(() => {
        if (minWidth == maxWidth) {
            setDefaultWidth(minWidth);
            setinputWidth(minWidth);
        }
        if (minDepth == maxDepth) {
            setDefaultDepth(minDepth);
            setinputDepth(minDepth);
        }
    }, [minWidth, maxWidth, minDepth, maxDepth]);

    return (
        <main>
            <section className="text-center">
                <div className="my-5 col-md-8 col-sm-10 mx-auto">
                    <h1 className="display-4">Select the cab size</h1>
                    <FormPrepend action="result">
                        <UnitSwitch />
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="cab-width" className="form-label">
                                    Width: <br />
                                    min: <Unit type='in'>{minWidth}</Unit>|
                                    max: <Unit type='in'>{maxWidth}</Unit>
                                </label>
                                <input type="number"
                                    id="cab-width"
                                    name="cab-width"
                                    min={unit(minWidth, 'in')}
                                    max={unit(maxWidth, 'in')}
                                    step="0.01"
                                    className="form-control text-center"
                                    onChange={inputHandler}
                                    disabled={minWidth == maxWidth ? true : false}
                                    defaultValue={defaultWidth}
                                    required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="cab-depth" className="form-label">
                                    Depth: <br />
                                    min: <Unit type='in'>{minDepth}</Unit>|
                                    max: <Unit type='in'>{maxDepth}</Unit>
                                </label>
                                <input type="number"
                                    id="cab-depth"
                                    name="cab-depth"
                                    min={unit(minDepth, 'in')}
                                    max={unit(maxDepth, 'in')}
                                    step="0.01"
                                    className="form-control text-center"
                                    onChange={inputHandler}
                                    disabled={minDepth == maxDepth ? true : false}
                                    defaultValue={defaultDepth}
                                    required />
                            </div>
                        </div>
                        <label className="form-label w-50">Height
                            <select className="form-select form-select-sm text-center mx-auto" aria-label=".form-select-sm example" name="cab-height" required>
                                <option value='' defaultValue>Select Height</option>
                                <option value={84}><Unit type='in'>84</Unit></option>
                                <option value={96}><Unit type='in'>96</Unit></option>
                            </select>
                        </label>
                        <div className="text-center my-3">
                            <ReactiveTable
                                width={minWidth == maxWidth ? unit(inputWidth, 'in') : inputWidth}
                                depth={minDepth == maxDepth ? unit(inputDepth, 'in') : inputDepth}
                                minWidth={unit(minWidth, 'in')}
                                maxWidth={unit(maxWidth, 'in')}
                                minDepth={unit(minDepth, 'in')}
                                maxDepth={unit(maxDepth, 'in')}
                                elevatorData={elevatorParams} />
                        </div>
                        <input type="submit" value="Next" className="btn btn-primary" />
                    </FormPrepend>
                </div>
            </section>
        </main>

    )
}