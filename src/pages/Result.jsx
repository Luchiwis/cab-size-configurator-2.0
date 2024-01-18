//components
import { ButtonCopyURL } from "/src/components/ButtonCopyURL";
import { ButtonSavePDF } from "/src/components/ButtonSavePDF";
import { UnitSwitch } from "/src/components/UnitSwitch";
import { Unit } from "/src/components/Unit";
import { TableResult } from "/src/components/TableResult";
import { ButtonEmailShare } from "/src/components/ButtonEmailShare";
import { ButtonElevatorInfo } from "/src/components/ButtonElevatorInfo";

//hooks
import { useElevatorParams } from "/hooks/useElevatorParams";
import { useState } from "react";

//scripts
import { prettify } from "/src/logic/prettify";


export function Result() {
    const elevatorParams = useElevatorParams();
    const [overhead, setOverhead] = useState(0);
    const [pit, setPit] = useState(0);


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
                            <li className="list-group-item">Model: {prettify(elevatorParams.model)}</li>
                            <li className="list-group-item">Type: {prettify(elevatorParams.type)}</li>
                            <li className="list-group-item">Door: {prettify(elevatorParams.door)}</li>
                            <li className="list-group-item">Landing door: {prettify(elevatorParams.landing) || 'No'}</li>
                            <li className="list-group-item">Cab height: <Unit type='in'>{prettify(elevatorParams['cab-height'])}</Unit></li>
                            <li className="list-group-item">Door height: <Unit type='in'>{prettify(elevatorParams['door-height'])}</Unit></li>
                            <li className="list-group-item">Overhead: <Unit type='in'>{overhead}</Unit></li>
                            <li className="list-group-item">Pit depth: <Unit type='in'>{pit}</Unit></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 mx-auto my-1">
                        <TableResult
                            elevator={elevatorParams}
                            setOverhead={setOverhead}
                            setPit={setPit}
                        />
                        <div className="shareSeciton my-4 no-print d-flexbox">
                            <ButtonCopyURL>Copy URL</ButtonCopyURL>
                            <ButtonSavePDF>Save as PDF</ButtonSavePDF>
                            <ButtonEmailShare>Send as email</ButtonEmailShare>
                            <ButtonElevatorInfo model={elevatorParams.model}>See elevator model information</ButtonElevatorInfo>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}