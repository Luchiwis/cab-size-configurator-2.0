// components
import { EmailConsult } from "./Email"

// hooks
import { createContext, useState } from "react"

export const RestrictionContext = createContext()

export function RestrictionBox({ children }) {
    const [restrictions, setRestrictions] = useState([])
    return (
        <>
            <RestrictionContext.Provider value={[restrictions, setRestrictions]}>
                {children}
            </RestrictionContext.Provider>
            <section className={"text-center py-2 mb-4 " + (Array.from(restrictions).length ? '': 'd-none')} id="restrictions">
                <h4>Restrictions:</h4>
                <ul>
                    {restrictions.map((restriction,index) => {
                        return (
                            <li key={index} className="restriction">
                                <span>{restriction}</span>
                            </li>
                        )
                    })}
                </ul>
                <button className="btn btn-secondary"><EmailConsult>consult factory</EmailConsult></button>
                
            </section>
        </>
    )
}