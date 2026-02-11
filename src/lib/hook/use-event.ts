import { eventKey } from "@/export";
import { useEchoPublic } from "@laravel/echo-react";
import React from "react";
import { useParams } from 'react-router-dom';


export const useEvent = () => {
    const { id } = useParams()
    const { listen, leave } = useEchoPublic(
        `session.${id}`, eventKey, (e) => { console.log(e) }
    );

    React.useEffect(() => {
        listen()
        return () => { leave() }
    }, [])
}