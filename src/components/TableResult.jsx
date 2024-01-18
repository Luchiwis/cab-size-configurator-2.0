// hooks
import { useEffect, useState, useContext } from 'react';

// contexts
import { UnitContext } from '../App';

// components
import { Unit } from "/src/components/Unit";

// scripts
import * as calculate from '/src/logic/sizeCalculation';


export function TableResult({ elevator, setOverhead, setPit }) {
    const DEFAULT_SYMBOL = "-"
    const [innerWidth, setInnerWidth] = useState(DEFAULT_SYMBOL);
    const [innerDepth, setInnerDepth] = useState(DEFAULT_SYMBOL);
    const [hoistwayWidth, setHoistwayWidth] = useState(DEFAULT_SYMBOL);
    const [hoistwayDepth, setHoistwayDepth] = useState(DEFAULT_SYMBOL);
    const [overallWidth, setOverallWidth] = useState(DEFAULT_SYMBOL);
    const [overallDepth, setOverallDepth] = useState(DEFAULT_SYMBOL);

    const [units, setUnits] = useContext(UnitContext)
    const [urlUnit, setUrlUnit] = useState(elevator['unit'] || 'in');


    useEffect(() => {
        const type = elevator['type'];
        const model = elevator['model'];
        const door = elevator['door'];
        const width = elevator['cab-width'];
        const depth = elevator['cab-width'];
        const cabHeight = elevator['cab-height'];
        const doorHeight = elevator['door-height'];

        let innerDimensions = calculate.innerDimensions(type, width, depth, units);
        let hoistwayDimensions = calculate.hoistwayDimensions(type, model, width, depth, units);
        let overhead = calculate.overhead(model, door, doorHeight, cabHeight)
        let pit = calculate.pitDepth(door);

        setInnerWidth(innerDimensions['width']);
        setInnerDepth(innerDimensions['depth']);
        setHoistwayWidth(elevator['hoistway-width'] || hoistwayDimensions['width']);
        setHoistwayDepth(elevator['hoistway-depth'] || hoistwayDimensions['depth']);
        setOverallWidth(width);
        setOverallDepth(depth);
        setOverhead(overhead);
        setPit(pit);
    }, []);

    return (
        <>
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
                        <td><Unit type={urlUnit}>{innerWidth}</Unit></td>
                        <td><Unit type={urlUnit}>{innerDepth}</Unit></td>
                    </tr>
                    <tr>
                        <td>Hoistway Size</td>
                        <td><Unit type={urlUnit}>{hoistwayWidth}</Unit></td>
                        <td><Unit type={urlUnit}>{hoistwayDepth}</Unit></td>
                    </tr>
                    <tr>
                        <td>Platform Size</td>
                        <td><Unit type={urlUnit}>{overallWidth}</Unit></td>
                        <td><Unit type={urlUnit}>{overallDepth}</Unit></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}