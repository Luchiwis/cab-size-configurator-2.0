

import { inchesToMillimeters, millimetersToInches } from "/src/logic/unitConversion";
import  * as constants  from "/src/logic/constants";

//hooks
import { useEffect, useState } from "react";
import { useContext } from "react";

//contexts
import { UnitContext } from "../App";

export function Unit({ children, type }) {
    const [globalUnit, setGlobalUnit] = useContext(UnitContext);
    const [shownValue, setShownValue] = useState(children);
    const [symbol, setSymbol] = useState(constants.unitSymbols[globalUnit]);

    useEffect(() => {
        setSymbol(constants.unitSymbols[globalUnit]);
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