import { useEffect, useState } from "react";
import { useContext } from "react";
import { UnitContext } from "../App";
import { inchesToMillimeters, millimetersToInches } from "../logic/unitConversion";
import { unitSymbols } from "../logic/constants";

export function Unit({ children, type }) {
    const [globalUnit, setGlobalUnit] = useContext(UnitContext);
    const [shownValue, setShownValue] = useState(children);
    const [symbol, setSymbol] = useState(unitSymbols[globalUnit]);
    useEffect(() => {
        setSymbol(unitSymbols[globalUnit]);
        if (isNaN(children)) {
            setShownValue(children);
            setSymbol('');
        } else if (type == 'in' && globalUnit == 'mm') {
            setShownValue(Math.round(inchesToMillimeters(children)))
        } else if (type == 'mm' && globalUnit == 'in') {
            setShownValue(millimetersToInches(children).toFixed(2))
        } else {
            setShownValue(children)
        }
    }, [globalUnit, children])
    return (
        shownValue + symbol
    )
}