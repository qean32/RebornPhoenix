import { useEffect } from "react";
import { getHTMLData } from "../function";

export function useClickOutside(ref: any, callBack: Function) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target) && !getHTMLData(event, false, 'value')) {
                callBack()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}