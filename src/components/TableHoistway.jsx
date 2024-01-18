// hooks
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConvertFrom } from '/hooks/Units';
import { useAddRestrictions } from '/hooks/useAddRestrictions';

// components
import { Unit } from "/src/components/Unit";

// scripts
import * as calculate from '/src/logic/sizeCalculation';
import { filterHoistwayInRange } from '/src/logic/dbManager';
import { prettify } from '/src/logic/prettify';

export function TableHoistway({ hoistwayWidth, hoistwayDepth, model, type, door }) {
    const [restrictions, addRestriction, resetRestrictions] = useAddRestrictions();
    const [guide, setGuide] = useState([]);
    const navigate = useNavigate();
    hoistwayWidth = useConvertFrom(hoistwayWidth, 'in');
    hoistwayDepth = useConvertFrom(hoistwayDepth, 'in');
    hoistwayWidth = Number(hoistwayWidth);
    hoistwayDepth = Number(hoistwayDepth);

    useEffect(() => {
        let filtered = filterHoistwayInRange(hoistwayWidth, hoistwayDepth, model, type, door);
        setGuide(
            filtered.map((elevator, index) => {
                const { model, type, door, landing } = elevator;
                let redirecturl = `/cab?model=${model}&type=${type}&door=${door}${landing ? '&landing=on' : ''}`
                if (hoistwayWidth && hoistwayDepth) {redirecturl += `&hoistway-width=${hoistwayWidth}&hoistway-depth=${hoistwayDepth}`}
                const cabDeduction = calculate.overall(elevator.model, elevator.type, hoistwayWidth, hoistwayDepth);
                let maxWidth, maxDepth;

                //if exceeded max hoistway size, use max overall size of planning guide. if not, use cab deduction
                if (hoistwayWidth > elevator['maxHoistwayWidth'] || hoistwayWidth <= 0) {
                    maxWidth = elevator['maxOverallWidth'];
                } else {
                    maxWidth = cabDeduction['width'];
                }
                if (hoistwayDepth > elevator['maxHoistwayDepth'] || hoistwayDepth <= 0) {
                    maxDepth = elevator['maxOverallDepth'];
                } else {
                    maxDepth = cabDeduction['depth'];
                }

                // B,C,D cannot exceed in depth, E cannot exceed in width
                if ((['E'].includes(elevator.type)) && hoistwayWidth > elevator.maxHoistwayWidth) {
                    maxWidth = `type: ${elevator.type} cannot exceed in width (max: ${elevator.maxHoistwayWidth}")`;
                    // return null
                } else if ((['B', 'C', 'D'].includes(elevator.type)) && hoistwayDepth > elevator.maxHoistwayDepth) {
                    maxDepth = `type: ${elevator.type} cannot exceed in depth (max: ${elevator.maxHoistwayDepth}")`;
                    // return null
                }


                return (
                    <tr className='hoistwayRow' key={index} onClick={() => { navigate(redirecturl) }}>
                        <td>{prettify(model)}</td>
                        <td>{prettify(type)}</td>
                        <td>{prettify(door)}</td>
                        <td>{prettify(landing)}</td>
                        <td><Unit type='in'>{maxWidth}</Unit></td>
                        <td><Unit type='in'>{maxDepth}</Unit></td>
                    </tr>
                )
            }
            )
        )
    }, [hoistwayWidth, hoistwayDepth, model, type, door]);

    //restrictions
    useEffect(() => {
        if (guide.length == 0 && Number(hoistwayWidth) && Number(hoistwayDepth)) {
            addRestriction('For more information, please consult factory.');
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
                    <th>Max. cab width</th>
                    <th>Max. cab depth</th>
                </tr>
            </thead>

            <tbody>
                {guide}
            </tbody>
        </table>
    )
}