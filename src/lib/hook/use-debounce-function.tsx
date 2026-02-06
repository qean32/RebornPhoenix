import React from "react";

export const useDebounceFunction = (func: Function, delay: number = 400) => {
    const ref: any = React.useRef(null);

    return (...args: any) => {
        clearTimeout(ref.current);
        ref.current = setTimeout(() => func(...args), delay);
    };
}