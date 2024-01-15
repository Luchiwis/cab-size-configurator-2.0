import { useEffect, useState, useContext } from 'react';
import * as calculate from '../logic/sizeCalculation';
import { UnitContext } from '../App';
import { unitSymbols as symbols } from '../logic/constants';
import { Unit } from "../components/Unit";


export function ReactiveTable({ width, depth, minWidth = 0, maxWidth = Infinity, minDepth = 0, maxDepth = Infinity, elevatorData }) {
    //todo:re think component

    const [globalUnit, setGlobalUnit] = useContext(UnitContext);
    const [innerWidth, setInnerWidth] = useState('-');
    const [innerDepth, setInnerDepth] = useState('-');
    const [hoistwayWidth, setHoistwayWidth] = useState('-');
    const [hoistwayDepth, setHoistwayDepth] = useState('-');
    const [overallWidth, setOverallWidth] = useState('-');
    const [overallDepth, setOverallDepth] = useState('-');

    useEffect(() => {
        let innerDimensions = calculate.innerDimensions(elevatorData['type'], width, depth, globalUnit);
        let hoistwayDimensions = calculate.hoistwayDimensions(elevatorData['type'], elevatorData['model'], width, depth, globalUnit);

        //width in range
        if (width >= minWidth && width <= maxWidth) {
            setInnerWidth(innerDimensions['width'])
            setHoistwayWidth(hoistwayDimensions['width'])
            setOverallWidth(width)
        } else {
            setInnerWidth('-')
            setHoistwayWidth('-')
            setOverallWidth('-')
        };

        //depth in range
        if (depth >= minDepth && depth <= maxDepth) {
            setInnerDepth(innerDimensions['depth'])
            setHoistwayDepth(hoistwayDimensions['depth'])
            setOverallDepth(depth)
        } else {
            setInnerDepth('-')
            setHoistwayDepth('-')
            setOverallDepth('-')
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

export function TableFinish({ elevator, setOverhead, setPit }) {
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

        let innerDimensions = calculate.innerDimensions(type, width, depth, units);
        let hoistwayDimensions = calculate.hoistwayDimensions(type, model, width, depth, units);
        let overhead = calculate.overhead(door, cabHeight, units)
        let pit = calculate.pitDepth(door);

        setInnerWidth(innerDimensions['width']);
        setInnerDepth(innerDimensions['depth']);
        setHoistwayWidth(hoistwayDimensions['width']);
        setHoistwayDepth(hoistwayDimensions['depth']);
        setOverallWidth(elevator['width']);
        setOverallDepth(elevator['depth']);
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
                        <td><Unit type={urlUnit}>{elevator['cab-width']}</Unit></td>
                        <td><Unit type={urlUnit}>{elevator['cab-depth']}</Unit></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}