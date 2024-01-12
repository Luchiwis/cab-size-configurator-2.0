import { FormPrepend } from '../components/FormPrepend.jsx';
import { useElevatorParams } from '/hooks/useElevatorParams.js';
import { useEffect, useState } from 'react';
import { restrictedDoorCombos } from '../logic/constants.js';


function DoorButton({ name, value, children, elevatorData , setDoor}) {
    const [disabled, setDisabled] = useState(false);
    const isDoorRestricted= ({ door, type, model }) => {
        //return true if the door is restricted
        for (const combo of restrictedDoorCombos) {
            if (door == combo.restrictions) {
                if (combo.type && combo.model) {
                    return (type == combo.type && model == combo.model)? true : false;
                } else if (combo.type && type == combo.type) {
                    return true;
                } else if (combo.model && model == combo.model) {
                    return true;
                }
            }
        }
        return false;
    }
    useEffect(() => {
        setDisabled(isDoorRestricted({...elevatorData, door: value}));
    }, [elevatorData]);

    return (
        <>
            <input type="radio" name={name} value={value} id={value} disabled={disabled} onClick={() => {setDoor(value)}} required />
            <label htmlFor={value}>
                <span className="btn btn-secondary">
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
        }else {
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
                            <DoorButton name="door" value="accordion" elevatorData={elevatorData} setDoor={setDoor}>Accordion</DoorButton>
                            <DoorButton name="door" value="bifold" elevatorData={elevatorData} setDoor={setDoor}>Bifold</DoorButton>
                            <DoorButton name="door" value="2speed" elevatorData={elevatorData} setDoor={setDoor}>2 speed sliding</DoorButton>
                            <DoorButton name="door" value="3speed" elevatorData={elevatorData} setDoor={setDoor}>3 speed sliding</DoorButton>

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