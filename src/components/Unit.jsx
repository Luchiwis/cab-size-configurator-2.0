import { useEffect } from "react";
import { useContext } from "react";
import { UnitContext } from "../App";
import { useState } from "react";
import { inchesToMillimeters, millimetersToInches } from "../logic/unitConversion";
import { unitSymbols } from "../logic/constants";


export function Unit({ children, type }) {
    const [globalUnit, setGlobalUnit] = useContext(UnitContext);
    const [shownValue, setShownValue] = useState(children);
    useEffect(() => {
        if ( type == 'in' && globalUnit == 'mm') {
            setShownValue(inchesToMillimeters(children).toFixed(1))
        } else if ( type == 'mm' && globalUnit == 'in') {
            setShownValue(millimetersToInches(children).toFixed(2))
        } else {
            setShownValue(children)
        }
    }, [globalUnit])
    return (
        shownValue + unitSymbols[globalUnit]
    )
}