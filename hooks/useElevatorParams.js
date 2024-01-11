import { useSearchParams } from "react-router-dom";

export function useElevatorParams() {
    // Get the search params from the URL and return them as an object
    const [searchParams] = useSearchParams();
    const params = Object.fromEntries(searchParams.entries());
    return params;
}