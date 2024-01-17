// hooks
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

export function FormPrepend({ children, action, method}){
    // this component is used to prepend the inputs from the url to the form
    const [searchParams] = useSearchParams();
    const [newInputs, setNewInputs] = useState([]);
    useEffect(() => {
        const urlNewInputs = []
        console.log(searchParams.forEach((value, key) => {
            urlNewInputs.push(<input type="hidden" readOnly name={key} value={value} key={key}/>);
        }))
        setNewInputs(urlNewInputs)
    }, [])

    return (
        <form action={action} method={method}>
            {newInputs}
            {children}
        </form>
    )
}