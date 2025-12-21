import React from "react";
import { getWindowSize } from "../function";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState(getWindowSize());

    React.useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return windowSize
}