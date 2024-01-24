// hooks
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConvertFrom } from '/hooks/Units';
import { useAddRestrictions } from '/hooks/useAddRestrictions';

// contexts
import { UnitContext } from '/src/App';

// components
import { Unit } from "/src/components/Unit";
import { RowModal } from './RowModal';

// scripts
import * as calculate from '/src/logic/sizeCalculation';
import { filterHoistwayInRange } from '/src/logic/dbManager';
import { prettify } from '/src/logic/prettify';

export function TableHoistway({ hoistwayWidth, hoistwayDepth, model, type, door }) {
    const [, addRestriction, resetRestrictions] = useAddRestrictions();
    const [guide, setGuide] = useState([]);
    const [unit, setUnit] = useContext(UnitContext);
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
                if (hoistwayWidth && hoistwayDepth) { redirecturl += `&hoistway-width=${hoistwayWidth}&hoistway-depth=${hoistwayDepth}&unit=${unit}` }
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
                    // maxWidth = `type: ${elevator.type} cannot exceed in width (max: ${elevator.maxHoistwayWidth}")`;
                    return null
                } else if ((['B', 'C', 'D'].includes(elevator.type)) && hoistwayDepth > elevator.maxHoistwayDepth) {
                    // maxDepth = `type: ${elevator.type} cannot exceed in depth (max: ${elevator.maxHoistwayDepth}")`;
                    return null
                }


                return (
                    <>
                        <tr className='hoistwayRow' key={"tr"+index} data-bs-toggle="modal" data-bs-target={"#modal" + index}>
                            <td>{prettify(model)}</td>
                            <td>{prettify(type)}</td>
                            <td>{prettify(door)}</td>
                            <td>{prettify(landing)}</td>
                            <td><Unit type='in'>{maxWidth}</Unit></td>
                            <td><Unit type='in'>{maxDepth}</Unit></td>
                        </tr>
                        <RowModal key={"modal"+index} id={"modal" + index} title={'Elevator properties'} configUrl={redirecturl}>
                        <img src={'/img/blueprints/'+elevator['img']} className='w-100 my-3' alt="blueprint of elevator" />
                            <ul>
                                <li>Model: {prettify(model)}</li>
                                <li>Type: {prettify(type)}</li>
                                <li>Door: {prettify(door)}</li>
                                <li>Landing: {prettify(landing)}</li>
                                <li>Maximum Cab Width: <Unit type='in'>{maxWidth}</Unit></li>
                                <li>Maximum Cab Depth: <Unit type='in'>{maxDepth}</Unit></li>
                            </ul>
                        </RowModal>
                    </>
                )
            }
            )
        )
    }, [hoistwayWidth, hoistwayDepth, model, type, door, unit]);

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
                    <th>Maximum Cab Width</th>
                    <th>Maximum Cab Depth</th>
                </tr>
            </thead>

            <tbody>
                {guide}
            </tbody>
        </table>
    )
}