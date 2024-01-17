//hooks
import { useContext } from "react";

//contexts
import { UnitContext } from "/src/App";

//logic
import { inchesToMillimeters, millimetersToInches } from "/src/logic/unitConversion";

export function useConvertTo(value, from='in') {
    // based on component Unit but is a function without unit symbol
    const [globalUnit, setGlobalUnit] = useContext(UnitContext);
    if (isNaN(value)) {
        return value;
    } else if (type == 'in' && globalUnit == 'mm') {
        return Math.round(inchesToMillimeters(value))
    }
    else if (type == 'mm' && globalUnit == 'in') {
        return millimetersToInches(value).toFixed(2)
    } else {
        return value
    }
}

export function useConvertFrom(value, to='in') {
    //convert value to global unit
    const [globalUnit, setGlobalUnit] = useContext(UnitContext);
    if (isNaN(value)) {
        return value;
    } else if (to == 'in' && globalUnit == 'mm') {
        return millimetersToInches(value).toFixed(2)
    }
    else if (to == 'mm' && globalUnit == 'in') {
        return Math.round(inchesToMillimeters(value))
    } else {
        return value
    }
}