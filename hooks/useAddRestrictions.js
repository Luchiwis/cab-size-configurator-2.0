import { useContext } from "react";
import { RestrictionContext } from "/src/components/RestrictionBox";

export function useAddRestrictions() {
    const [restrictions, setRestrictions] = useContext(RestrictionContext);

    function addRestrictions(newRestrictions) {
        setRestrictions((prevRestrictions) => {
            return [...prevRestrictions, newRestrictions];
        });
    }

    function resetRestrictions() {
        setRestrictions([]);
    }

    return [restrictions, addRestrictions, resetRestrictions];
}