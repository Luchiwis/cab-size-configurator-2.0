// hooks
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

//scripts
import { prettify } from '/src/logic/prettify';

export function Selections() {
    const [searchParams] = useSearchParams();
    const [newInputs, setNewInputs] = useState([]);

    useEffect(() => {
        const urlNewInputs = []
        console.log(searchParams.forEach((value, key) => {
            urlNewInputs.push(<li key={key} className="mx-3">{prettify(key)}: {prettify(value)}</li>);
        }))
        setNewInputs(urlNewInputs)
    }, [])

    return (
        <section className="d-flex align-items-center justify-content-center mt-3">
            <ul className="d-flex">
                {newInputs}
            </ul>
        </section>
    )
}