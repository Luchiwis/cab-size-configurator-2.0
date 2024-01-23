//hooks
import { useEffect, useState } from "react"
import { useElevatorParams } from "/hooks/useElevatorParams"
import { useAddRestrictions } from "/hooks/useAddRestrictions"
import { useConvertTo } from "/hooks/Units"

//components
import { Unit } from "/src/components/Unit"
import { FormPrepend } from "/src/components/FormPrepend"
import { UnitSwitch } from "/src/components/UnitSwitch"
import { TableCab } from "/src/components/TableCab"

//scripts
import { filterObjects, getRanges } from "/src/logic/dbManager"

export function Cab() {
    const [, addRestriction, resetRestrictions] = useAddRestrictions();
    const elevatorParams = useElevatorParams();
    const [inputWidth, setinputWidth] = useState(0);
    const [inputDepth, setinputDepth] = useState(0);
    const [minWidth, setMinWidth] = useState(0);
    const [maxWidth, setMaxWidth] = useState(0);
    const [minDepth, setMinDepth] = useState(0);
    const [maxDepth, setMaxDepth] = useState(0);
    const [height, setHeight] = useState(0);
    const [defaultWidth, setDefaultWidth] = useState(undefined);
    const [defaultDepth, setDefaultDepth] = useState(undefined);

    const inputHandler = (e) => {
        if (e.target.id == 'cab-width') {
            setinputWidth(e.target.value);
        } else if (e.target.id == 'cab-depth') {
            setinputDepth(e.target.value);
        } else if (e.target.name == 'cab-height') {
            setHeight(e.target.value);
        }
    }

    //first render
    useEffect(() => {
        const filterParams = {...elevatorParams, 'hoistway-width': undefined, 'hoistway-depth': undefined, 'unit': undefined};

        const objects = filterObjects(filterParams);

        console.log(objects)
        const gotRanges = getRanges(objects);
        setMinWidth(gotRanges.minOverallWidth);
        setMaxWidth(gotRanges.maxOverallWidth);
        setMinDepth(gotRanges.minOverallDepth);
        setMaxDepth(gotRanges.maxOverallDepth);

        if (elevatorParams.door == '2speed'){
            addRestriction('2 speed doors are not available with 96" cab height');
        }
        return () => {
            resetRestrictions();
        }
    }, []);

    //when min == max restrict
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
                            <div className="col-lg-6">
                                <label htmlFor="cab-width" className="form-label">
                                    Width: <br />
                                    Minimum: <Unit type='in'>{minWidth}</Unit>
                                    &nbsp;
                                    Maximum: <Unit type='in'>{maxWidth}</Unit>
                                </label>
                                <input type="number"
                                    id="cab-width"
                                    name="cab-width"
                                    min={useConvertTo(minWidth, 'in')}
                                    max={useConvertTo(maxWidth, 'in')}
                                    step="0.01"
                                    className="form-control text-center"
                                    onChange={inputHandler}
                                    readOnly={minWidth == maxWidth ? true : false}
                                    defaultValue={useConvertTo(defaultWidth, 'in') || ''}
                                    required />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="cab-depth" className="form-label">
                                    Depth: <br />
                                    Minimum: <Unit type='in'>{minDepth}</Unit>
                                    &nbsp;
                                    Maximum: <Unit type='in'>{maxDepth}</Unit>
                                </label>
                                <input type="number"
                                    id="cab-depth"
                                    name="cab-depth"
                                    min={useConvertTo(minDepth, 'in')}
                                    max={useConvertTo(maxDepth, 'in')}
                                    step="0.01"
                                    className="form-control text-center"
                                    onChange={inputHandler}
                                    readOnly={minDepth == maxDepth ? true : false}
                                    defaultValue={useConvertTo(defaultDepth, 'in') || ''}
                                    required />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <label className="form-label col-6 m-auto">Height:
                                <select className="form-select form-select-sm text-center mx-auto" aria-label=".form-select-sm example" name="cab-height" required onChange={inputHandler}>
                                    <option value='' defaultValue>Select Height</option>
                                    <option value={84}><Unit type='in'>84</Unit></option>
                                    <option disabled={elevatorParams.door == '2speed'} value={96}><Unit type='in'>96</Unit></option>
                                </select>
                            </label>
                            <label className="form-label col-6 m-auto">Door Height:
                                <select className="form-select form-select-sm text-center mx-auto" aria-label=".form-select-sm example" name="door-height" required
                                    defaultValue={height < 96 && ''}>
                                    <option value='' defaultValue>Select Door Height</option>
                                    <option value={84}><Unit type='in'>84</Unit></option>
                                    {(height == 84 || elevatorParams.door == '2speed') ? '' : <option value={96}><Unit type='in'>96</Unit></option>}
                                </select>
                            </label>
                        </div>


                        <div className="text-center my-3">
                            <TableCab
                                width={useConvertTo(inputWidth, 'in')}
                                depth={useConvertTo(inputDepth, 'in')}
                                minWidth={useConvertTo(minWidth, 'in')}
                                maxWidth={useConvertTo(maxWidth, 'in')}
                                minDepth={useConvertTo(minDepth, 'in')}
                                maxDepth={useConvertTo(maxDepth, 'in')}
                                elevatorData={elevatorParams} />
                        </div>
                        <input type="submit" value="Next" className="btn btn-primary" />
                    </FormPrepend>
                </div>
            </section>
        </main>

    )
}