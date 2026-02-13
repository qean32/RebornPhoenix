import { eventKey } from "@/export";
import { useEchoPublic } from "@laravel/echo-react";
import React from "react";
import { useParams } from 'react-router-dom';
import { useAppDispatch } from "./redux";
import { eventType } from "@/model";
import { changeEntity, changeObject, scaleObject, swapCurrentMap } from "@/store/session-store";
import { useToast } from "./use-toast";


export const useEventListen = () => {
    const { id } = useParams();
    const dispath = useAppDispatch();
    const toast = useToast()

    const handler = ({ event: { payload, type } }: { event: eventType }) => {
        console.log(payload, type)
        if (type == 'change-entity') {
            dispath(changeEntity({ payload }))
            return
        }
        if (type == 'dice') {
            toast('message', { text: `выпало ${payload.roll}!` })
        }
        if (type == 'change-object') {
            if (payload.operation) {
                dispath(scaleObject({ ...payload }))
                return
            }
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