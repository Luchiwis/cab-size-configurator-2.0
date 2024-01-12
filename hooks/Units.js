import { useEffect, useState } from "react";
import { useContext } from "react";
import { UnitContext } from "/src/App";
import { inchesToMillimeters, millimetersToInches } from "/src/logic/unitConversion";
import { unitSymbols } from "/src/logic/constants";

export function unit(value, type='in') {
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