import { useEffect, useState, useContext } from 'react';
import * as calculate from '../logic/sizeCalculation';
import { UnitContext } from '../App';
import { unitSymbols as symbols } from '../logic/constants';
import { Unit } from "../components/Unit";
import { filterHoistwayInRange } from '../logic/dbManager';
import { doors, models, landing as landings } from '../logic/constants';
import { useNavigate } from 'react-router-dom';
import { unitConvert } from '/hooks/Units';
import { useAddRestrictions } from '/hooks/useAddRestrictions';

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
        const doorHeight = elevator['door-height'];

        let innerDimensions = calculate.innerDimensions(type, width, depth, units);
        let hoistwayDimensions = calculate.hoistwayDimensions(type, model, width, depth, units);
        let overhead = calculate.overhead(model, door, doorHeight, cabHeight)
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

export function TableOptions({ hoistwayWidth, hoistwayDepth, model, type, door }) {
    const [restrictions, addRestriction, resetRestrictions] = useAddRestrictions();
    const [guide, setGuide] = useState([]);
    const navigate = useNavigate();
    const [units, setUnits] = useContext(UnitContext)
    hoistwayWidth = unitConvert(hoistwayWidth, 'in');
    hoistwayDepth = unitConvert(hoistwayDepth, 'in');
    useEffect(() => {
        let filtered = filterHoistwayInRange(hoistwayWidth, hoistwayDepth, model, type, door);
        setGuide(
            filtered.map((elevator, index) => {
                const { model, type, door, landing } = elevator;
                const redirecturl = `/cab?model=${model}&type=${type}&door=${door}${landing ? '&landing=on' : ''}`
                const cabDeduction = calculate.overall(elevator.model, elevator.type, hoistwayWidth, hoistwayDepth);
                let maxWidth, maxDepth;

                //if exceeded max hoistway size, use max overall size of planning guide. if not, use cab deduction
                if (hoistwayWidth > elevator['maxHoistwayWidth']) {
                    maxWidth = elevator['maxOverallWidth'];
                } else {
                    maxWidth = cabDeduction['width'];
                }
                if (hoistwayDepth > elevator['maxHoistwayDepth']) {
                    maxDepth = elevator['maxOverallDepth'];
                } else {
                    maxDepth = cabDeduction['depth'];
                }

                // B,C,D cannot exceed in depth, E cannot exceed in width
                if ((['E'].includes(elevator.type)) && hoistwayWidth > elevator.maxHoistwayWidth) {
                    maxWidth = `type: ${elevator.type} cannot exceed in width (max: ${elevator.maxHoistwayWidth}in)`;
                    // return null
                } else if ((['B', 'C', 'D'].includes(elevator.type)) && hoistwayDepth > elevator.maxHoistwayDepth) {
                    maxDepth = `type: ${elevator.type} cannot exceed in depth (max: ${elevator.maxHoistwayDepth}in)`;
                    // return null
                }


                return (
                    <tr key={index} onClick={() => { navigate(redirecturl) }}>
                        <td>{models[model]}</td>
                        <td>{type}</td>
                        <td>{doors[door]}</td>
                        <td>{landings[landing]}</td>
                        <td><Unit type='in'>{maxWidth}</Unit></td>
                        <td><Unit type='in'>{maxDepth}</Unit></td>
                    </tr>
                )
            }
            )
        )
    }, [hoistwayWidth, hoistwayDepth, model, type, door]);

    useEffect(() => {
        if (guide.length == 0 && Number(hoistwayWidth) && Number(hoistwayDepth)) {
            addRestriction('We could not find any elevator models that fit your hoistway size. For more information, please consult factory.');
        } else {
            resetRestrictions();
        }
        return () => {
            resetRestrictions();
        }
    }, [hoistwayWidth, hoistwayDepth, model, type, door, guide]);

    return (
        <table className="table table-hoistway">
            <thead>
                <tr>
                    <th>Model</th>
                    <th>Type</th>
                    <th>Door</th>
                    <th>Landing</th>
                    <th>Max cab width</th>
                    <th>Max cab depth</th>
                </tr>
            </thead>

            <tbody>
                {guide}
            </tbody>
        </table>
    )
}