//components
import { ButtonCopyURL } from "../components/ButtonCopyURL";
import { ButtonSavePDF } from "../components/ButtonSavePDF";
import { UnitSwitch } from "../components/UnitSwitch";
import { Unit } from "../components/Unit";
import { ReactiveTable } from "../components/ReactiveTable";

//hooks
import { useElevatorParams } from "../../hooks/useElevatorParams";
import { useState, useEffect } from "react";



//context
export function Result() {
    const prettyElevatorParams = useElevatorParams(true);
    const elevatorParams = useElevatorParams();

    const [urlUnit, setUrlUnit] = useState(elevatorParams.unit || 'in');
    const [overhead, setOverhead] = useState(0);
    const [pitDepth, setPitDepth] = useState(0);

    return (
        <main>
            <div className="container text-center">
                <div className="row">
                    <h1 className="display-4">Your elevator properties</h1>
                    <UnitSwitch />
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6 mx-auto my-1">
                        <ul className="list-group">
                            <li className="list-group-item">Model: <span id="model">{prettyElevatorParams.model}</span></li>
                            <li className="list-group-item">Type: <span id="type">{prettyElevatorParams.type}</span></li>
                            <li className="list-group-item">Door: <span id="door">{prettyElevatorParams.door}</span></li>
                            <li className="list-group-item">Landing door: <span id="landing">{prettyElevatorParams.landing || 'no'}</span></li>
                            <li className="list-group-item">Overhead: { }<span id="overhead"></span></li>
                            <li className="list-group-item">Inner height: <span id="height"><Unit type='in'>{elevatorParams['cab-height']}</Unit></span></li>
                            <li className="list-group-item">Pit depth: <span id="pit-depth"></span></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 mx-auto my-1">
                        <ReactiveTable
                            width={elevatorParams['cab-width']}
                            depth={elevatorParams['cab-depth']}
                            elevatorData={elevatorParams} />

                        <div className="shareSeciton mt-5">
                            <ButtonCopyURL>copy URL to share</ButtonCopyURL>
                            <br />
                            <ButtonSavePDF></ButtonSavePDF>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}