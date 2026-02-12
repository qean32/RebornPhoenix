import { eventKey } from "@/export";
import { useEchoPublic } from "@laravel/echo-react";
import React from "react";
import { useParams } from 'react-router-dom';
import { useAppDispatch } from "./redux";
import { eventType } from "@/model";
import { changeEntity, changeObject, swapCurrentMap } from "@/store/session-store";


export const useEventListen = () => {
    const { id } = useParams();
    const dispath = useAppDispatch();
    const handler = ({ event: { payload, type } }: { event: eventType }) => {
        if (type == 'change-entity') {
            dispath(changeEntity({ payload }))
            return
        }
        if (type == 'change-object') {
            dispath(changeObject({ payload }))
            return
        }
        if (type == 'swap-map') {
            dispath(swapCurrentMap(payload))
            return
        }
    }

    const { listen, leave } = useEchoPublic(
        `session.${id}`, eventKey, handler
    );

    React.useEffect(() => {
        listen()
        return () => { leave() }
    }, [])
}