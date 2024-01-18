// hooks
import { useAddRestrictions } from '/hooks/useAddRestrictions.js';
import { useEffect, useState } from 'react';
import { useElevatorParams } from '/hooks/useElevatorParams.js';

// components
import { FormPrepend } from '/src/components/FormPrepend.jsx';

// scripts
import { restrictedDoorCombos } from '/src/logic/constants.js';
import { prettify } from '/src/logic/prettify.js';

function DoorButton({ name, value, children, elevatorData, setDoor }) {
    const [restrictions, addRestriction, resetRestrictions] = useAddRestrictions();
    const [disabled, setDisabled] = useState(false);
    const doorRestriction = ({ door, type, model }) => {
        //return true if the door is restricted
        for (const combo of restrictedDoorCombos) {
            if (door == combo.restrictions) {
                if (combo.type && combo.model) {
                    return (type == combo.type && model == combo.model) ? combo : false;
                } else if (combo.type && type == combo.type) {
                    return combo;
                } else if (combo.model && model == combo.model) {
                    return combo;
                }
            }
        }
        return false;
    }


    useEffect(() => {
        const restrictionMessage = doorRestriction({ ...elevatorData, door: value });
        setDisabled(restrictionMessage);

        if (restrictionMessage) {
            addRestriction(restrictionMessage.message);
        }
        return () => {
            resetRestrictions();
        }
    }, []);

    return (
        <>
            <input type="radio" name={name} value={value} id={value} disabled={disabled} onClick={() => { setDoor(value) }} required />
            <label htmlFor={value}>
                <span className="btn btn-outline-primary">
                    <h1>{children}</h1>
                </span>
            </label>
        </>
    )
}

function LandingButton({ name, children, door }) {
    const [displayClass, setDisplayClass] = useState('d-none');

    useEffect(() => {
        if (['2speed', '3speed'].includes(door)) {
            setDisplayClass('');
        } else {
            setDisplayClass('d-none');
        }
    }, [door]);

    return (
        <>
            <div className={"col-xs-2 text-xs-center m-auto pb-3 border w-50 " + displayClass} id="landingSection"
                data-toggle="buttons">
                <label className="form-check-label" htmlFor={name}>{children}</label>
                <br />
                <input className="form-check-input" type="checkbox" id={name} name={name} value="on"
                    style={{ width: '20px', height: '20px' }} />
            </div>
        </>
    )
}

export function Door() {
    const elevatorData = useElevatorParams();
    const [door, setDoor] = useState('');


    return (
        <main>
            <section className="text-center">
                <div className="my-5">
                    <h1 className="display-4">Select the type of door</h1>
                    <FormPrepend action="cab">
                        <div className="sect" id="sect-door">
                            <DoorButton name="door" value="accordion" elevatorData={elevatorData} setDoor={setDoor}>{prettify('accordion')}</DoorButton>
                            <DoorButton name="door" value="bifold" elevatorData={elevatorData} setDoor={setDoor}>{prettify('bifold')}</DoorButton>
                            <DoorButton name="door" value="2speed" elevatorData={elevatorData} setDoor={setDoor}>{prettify('2speed')}</DoorButton>
                            <DoorButton name="door" value="3speed" elevatorData={elevatorData} setDoor={setDoor}>{prettify('3speed')}</DoorButton>

                            <hr className="w-50 m-auto my-3" />

                            <LandingButton name="landing" door={door}>Federal provides cab and hall door</LandingButton>
                        </div>
                        <input type="submit" value="Next" className="btn btn-primary" />
                    </FormPrepend>
                </div>
            </section>
        </main>
    )
}