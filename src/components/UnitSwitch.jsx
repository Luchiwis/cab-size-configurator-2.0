//context
import { UnitContext } from "../App";
import { useContext } from "react";

export function UnitSwitch() {
    const [unit, setUnit] = useContext(UnitContext);

    const handleUnitChange = (e) => {
        setUnit(e.target.value)
        console.log('changed to:', unit)
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
                    defaultChecked={unit == 'mm'} />
                <label className="btn btn-outline-primary" htmlFor="unit-radio-mm">metric</label>

                <input type="radio"
                className="btn-check"
                name="unit" value="in"
                id="unit-radio-in"
                autoComplete="off"
                onClick={handleUnitChange}
                defaultChecked={unit == 'in'} />
                <label className="btn btn-outline-primary" htmlFor="unit-radio-in">imperial</label>
            </div>
        </div>
    )
}