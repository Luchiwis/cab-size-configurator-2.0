import { FormPrepend } from '../components/FormPrepend.jsx';
import { useElevatorParams } from '/hooks/useElevatorParams.js';
import { useEffect, useState } from 'react';
import { restrictedCombos } from '../logic/constants.js';

function doorRestrictions(elevatorData, availableDoors) {

    //filter combos based on elevatorData
    const actualCombos = restrictedCombos.filter(combo => {
        const { type, model } = elevatorData;
        return combo['type'] == type || combo['model'] == model;
    });

    // for each door, if combo has door, disable door
    availableDoors = Object.keys(availableDoors).reduce((acc, door) => {
        const combo = actualCombos.find(combo => combo['door'] == door);
        if (combo) {
            acc[door] = true;
        }
        return acc;
    }, availableDoors);

    return availableDoors;
}
//     //if type is C or D, disable slide2, slide3 and landing
//     if (['C', 'D'].includes(type)) {
//         document.getElementById('slide2').disabled = true;
//         document.getElementById('slide3').disabled = true;
//         // document.getElementById('landing').disabled = true;

//         // errorBox.showError('2 and 3 speed sliding doors are not available for types C and D, consult factory for these properties.');
//     }
//     if (model == 'legacy') {
//         document.getElementById('slide2').disabled = true;
//         document.getElementById('slide3').disabled = true;
//         // document.getElementById('landing').disabled = true;

//         // errorBox.showError('2 and 3 speed sliding doors are not available for legacy models, consult factory for these properties.');
//     }
//     if (['C', 'D'].includes(type) && model == 'legacy') {
//         // document.getElementById('bifold').disabled = true;

//         // errorBox.showError('Bi-fold doors are not available for types C and D in lecagy model, consult factory for these properties.');
//     }
// }

function DoorButton({ name, value, children, disabled = false }) {
    return (
        <>
            <input type="radio" name={name} value={value} id={value} disabled={disabled} required />
            <label htmlFor={value}>
                <span className="btn btn-secondary">
                    <h1>{children}</h1>
                </span>
            </label>
        </>
    )
}

export function Door() {
    const elevatorData = useElevatorParams();
    const [availableDoors, setAvailableDoors] = useState({ 'accordion': false, 'bifold': false, '2speed': false, '3speed': false });

    useEffect(() => {
        const availableDoors = { 'accordion': false, 'bifold': false, '2speed': false, '3speed': false };
        const filteredDoors = doorRestrictions(elevatorData, availableDoors);
        setAvailableDoors(filteredDoors);
    }, []);

    return (
        <main>
            <section className="text-center">
                <div className="my-5">
                    <h1 className="display-4">Select the type of door</h1>
                    <FormPrepend action="cab">
                        <div className="sect" id="sect-door">
                            

                            {/* <DoorButton name="door" value="accordion">Accordion</DoorButton>
                            <DoorButton name="door" value="bifold">Bifold</DoorButton>
                            <DoorButton name="door" value="2speed">2 speed sliding</DoorButton>
                            <DoorButton name="door" value="3speed">3 speed sliding</DoorButton> */}

                            {/* put all filtered buttons */}
                            {Object.keys(availableDoors).map(door => {
                                return (
                                    <DoorButton name="door" value={door} disabled={availableDoors[door]} key={door}>
                                        {door}
                                    </DoorButton>
                                )
                            })}

                            <hr className="w-50 m-auto my-3" />


                            <div className="col-xs-2 text-xs-center m-auto pb-3 border w-50 d-none" id="landingSection"
                                data-toggle="buttons">
                                <label className="form-check-label" htmlFor="landing">Federal provides cab and hall door</label>
                                <br />
                                <input className="form-check-input" type="checkbox" id="landing" name="landing" value="on"
                                    style={{ width: '20px', height: '20px' }} />
                            </div>
                        </div>
                        <input type="submit" value="Next" className="btn btn-primary" />
                    </FormPrepend>
                </div>
            </section>
        </main>
    )
}