//components
import { ButtonCopyURL } from "../components/ButtonCopyURL";
import { ButtonSavePDF } from "../components/ButtonSavePDF";
import { UnitSwitch } from "../components/UnitSwitch";
import { Unit } from "../components/Unit";
import { ReactiveTable, TableFinish } from "../components/ReactiveTable";

//hooks
import { useElevatorParams } from "../../hooks/useElevatorParams";
import { useState } from "react";


//context
export function Result() {
    const prettyElevatorParams = useElevatorParams(true);
    const elevatorParams = useElevatorParams();
    const [overhead,setOverhead] = useState(0);
    const [pit,setPit] = useState(0);
    

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
                            <li className="list-group-item">Model:{prettyElevatorParams.model}</li>
                            <li className="list-group-item">Type: {prettyElevatorParams.type}</li>
                            <li className="list-group-item">Door: {prettyElevatorParams.door}</li>
                            <li className="list-group-item">Landing door: {prettyElevatorParams.landing || 'no'}</li>
                            <li className="list-group-item">Cab height: <Unit type='in'>{elevatorParams['cab-height']}</Unit></li>
                            <li className="list-group-item">Overhead: <Unit type='in'>{overhead}</Unit></li>
                            <li className="list-group-item">Pit depth: <Unit type='in'>{pit}</Unit></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 mx-auto my-1">
                        <TableFinish
                            elevator={elevatorParams}
                            setOverhead={setOverhead}
                            setPit={setPit}
                        />
                        <div className="shareSeciton mt-5 no-print">
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