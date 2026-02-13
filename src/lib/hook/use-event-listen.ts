import { eventKey, qpk } from "@/config";
import { useEchoPublic } from "@laravel/echo-react";
import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "./redux";
import { eventType, keysEvent } from "@/model";
import { changeEntity, changeObject, scaleObject, swapCurrentMap } from "@/store/session-store";
import { useToast } from "./use-toast";
import { pushLog } from "@/store/log-store";
import { useQ } from "./use-q";


export const useEventListen = () => {
    const { id } = useParams();
    const dispath = useAppDispatch();
    const toast = useToast()
    const { pushQ } = useQ(qpk.viewimg)
    const actions = React.useMemo(() => {
        return new Map<keysEvent, (payload: any) => void>([
            [
                "change-entity",
                (payload: any) => {
                    dispath(changeEntity({ payload }))
                }
            ],
            [
                "change-object",
                (payload: any) => {
                    if (payload.operation) {
                        dispath(scaleObject({ ...payload }))
                        return
                    }
                    dispath(changeObject({ payload }))
                }
            ],
            [
                "dice",
                (payload: any) => {
                    toast("message", { text: `выпало ${payload.roll}!` })
                    dispath(pushLog({ log: `выпало ${payload.roll}!` }))
                }
            ],
            [
                "swap-map",
                (payload: any) => {
                    dispath(swapCurrentMap(payload))
                }
            ],
            [
                "view-img",
                (payload: any) => { pushQ(payload.img) }
            ],
        ])
    }, [])

    const handler = ({ event: { payload, type } }: { event: eventType }) => {
        const fn = actions.get(type)
        if (fn) fn(payload)

        return
    }

    const { listen, leave } = useEchoPublic(
        `session.${id}`, eventKey, handler
    );

    React.useEffect(() => {
        listen()
        return () => { leave() }
    }, [])
}