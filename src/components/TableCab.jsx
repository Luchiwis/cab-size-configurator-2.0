// hook
import { useEffect, useState, useContext } from 'react';

// contexts
import { UnitContext } from '../App';

// components
import { unitSymbols as symbols } from '/src/logic/constants';
import * as calculate from '/src/logic/sizeCalculation';

export function TableCab({ width, depth, minWidth = 0, maxWidth = Infinity, minDepth = 0, maxDepth = Infinity, elevatorData }) {
    //todo:re think component
    const DEFAULT_SYMBOL = "-"
    const [globalUnit, setGlobalUnit] = useContext(UnitContext);
    const [innerWidth, setInnerWidth] = useState(DEFAULT_SYMBOL);
    const [innerDepth, setInnerDepth] = useState(DEFAULT_SYMBOL);
    const [hoistwayWidth, setHoistwayWidth] = useState(DEFAULT_SYMBOL);
    const [hoistwayDepth, setHoistwayDepth] = useState(DEFAULT_SYMBOL);
    const [overallWidth, setOverallWidth] = useState(DEFAULT_SYMBOL);
    const [overallDepth, setOverallDepth] = useState(DEFAULT_SYMBOL);

    useEffect(() => {
        let innerDimensions = calculate.innerDimensions(elevatorData['type'], width, depth, globalUnit);
        let hoistwayDimensions = calculate.hoistwayDimensions(elevatorData['type'], elevatorData['model'], width, depth, globalUnit);

        //width in range
        if (width >= minWidth && width <= maxWidth) {
            setInnerWidth(innerDimensions['width'])
            setHoistwayWidth(hoistwayDimensions['width'])
            setOverallWidth(width)
        } else {
            setInnerWidth(DEFAULT_SYMBOL)
            setHoistwayWidth(DEFAULT_SYMBOL)
            setOverallWidth(DEFAULT_SYMBOL)
        };

        //depth in range
        if (depth >= minDepth && depth <= maxDepth) {
            setInnerDepth(innerDimensions['depth'])
            setHoistwayDepth(hoistwayDimensions['depth'])
            setOverallDepth(depth)
        } else {
            setInnerDepth(DEFAULT_SYMBOL)
            setHoistwayDepth(DEFAULT_SYMBOL)
            setOverallDepth(DEFAULT_SYMBOL)
        };
    }, [width, depth, minWidth, maxWidth, minDepth, maxDepth, elevatorData, globalUnit]);

    return (
        <table className="table mx-auto">
            <thead>
                <tr>
                    <th scope="col" className="col-3" />
                    <th scope="col">Width</th>
                    <th scope="col">Depth</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Interior Cab Size</td>
                    <td>{innerWidth}{!isNaN(innerWidth) && symbols[globalUnit]}</td>
                    <td>{innerDepth}{!isNaN(innerDepth) && symbols[globalUnit]}</td>
                </tr>
                <tr>
                    <td>Hoistway Size</td>
                    <td>{hoistwayWidth}{!isNaN(hoistwayWidth) && symbols[globalUnit]}</td>
                    <td>{hoistwayDepth}{!isNaN(hoistwayDepth) && symbols[globalUnit]}</td>
                </tr>
                <tr>
                    <td>Platform Size</td>
                    <td>{overallWidth}{!isNaN(overallWidth) && symbols[globalUnit]}</td>
                    <td>{overallDepth}{!isNaN(overallDepth) && symbols[globalUnit]}</td>
                </tr>
            </tbody>
        </table>
    )
}