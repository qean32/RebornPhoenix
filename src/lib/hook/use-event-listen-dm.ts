import { eventKey } from "@/config";
import { useEchoPublic } from "@laravel/echo-react";
import React from "react";
import { useParams } from 'react-router-dom';
import { eventType } from "@/model";
import { useToast } from "./use-toast";
import { useAppDispatch } from "./redux";
import { pushLog } from "@/store/log-store";


export const useEventListenDM = () => {
    const { id } = useParams();
    const toast = useToast()
    const dispath = useAppDispatch()

    const handler = ({ event: { payload, type } }: { event: eventType }) => {
        if (type == 'dice') {
            toast('message', { text: `выпало ${payload.roll}!` })
            dispath(pushLog({ log: `выпало ${payload.roll}!` }))
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