//context
import { UnitContext } from "../App";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useElevatorParams } from "/hooks/useElevatorParams";

export function UnitSwitch() {
    const [unit, setUnit] = useContext(UnitContext);

    const handleUnitChange = (e) => {
        setUnit(e.target.value)
    }

    return (
        <div id="unit-system">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio"
                    className="btn-check"
                    name="unit" value="mm"
                    id="unit-radio-mm"
                    autoComplete="off"
                    onClick={handleUnitChange}
                />
                <label className="btn btn-outline-primary" htmlFor="unit-radio-mm">metric</label>

                <input type="radio"
                    className="btn-check"
                    name="unit" value="in"
                    id="unit-radio-in"
                    autoComplete="off"
                    onClick={handleUnitChange}
                    defaultChecked
                />
                <label className="btn btn-outline-primary" htmlFor="unit-radio-in">imperial</label>
            </div>
        </div>
    )
}