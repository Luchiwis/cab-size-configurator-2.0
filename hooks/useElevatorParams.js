// hooks
import { useSearchParams } from "react-router-dom";

// logic 
import { prettify } from '/src/logic/prettify';

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

        //replace with readable values if requested
        if (readable) {
            params[key] = prettify(params[key]);
        }
    }
    return params;
}