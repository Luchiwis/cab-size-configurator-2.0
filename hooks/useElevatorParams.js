import { useSearchParams } from "react-router-dom";
import { doors, models, landing } from "/src/logic/constants.js";

export function useElevatorParams(readable = false) {
    // Get the search params from the URL and return them as an object
    const [searchParams] = useSearchParams();
    const params = Object.fromEntries(searchParams.entries());
    //replace "on" with true and "off" with false
    for (const key in params) {
        if (params[key] === "on") {
            params[key] = true;
        } else if (params[key] === "off") {
            params[key] = false;
        }

        //replace "accordion" with "accordion"
        if (key === "door" && readable) {
            params[key] = doors[params[key]];
        } else if (key === "model" && readable) {
            params[key] = models[params[key]];
        } else if (key === "landing" && readable) {
            params[key] = landing[params[key]];
        }
    }
    return params;
}