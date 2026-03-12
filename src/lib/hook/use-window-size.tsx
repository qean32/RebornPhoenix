import React from "react";
import { getWindowSize } from "../function";
import { useDebounce } from "./use-debounce";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState(getWindowSize());
    const debounce = useDebounce(windowSize)


    React.useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return debounce
}