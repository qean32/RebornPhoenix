import { eventKey } from "@/config";
import { useEchoPublic } from "@laravel/echo-react";
import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "./redux";
import { eventType, keysEvent } from "@/model";
import { changeEntity, changeObject, pushCharacter, pushEntity, pushMap, pushObject, scaleObject, setSession, swapCurrentMap } from "@/store/session";
import { useToast } from "./use-toast";
import { pushLog } from "@/store/log";
import { useViewImgThrow } from "./throw";


export const useEventListen = () => {
    const { id } = useParams();
    const dispath = useAppDispatch();
    const toast = useToast()
    const [_, swapImgView] = useViewImgThrow()

    const actions = React.useMemo(() => {
        return new Map<keysEvent, (payload: any) => void>([
            [
                "changeEntity",
                (payload: any) => {
                    dispath(changeEntity({ payload }))
                }
            ],
            [
                "changeObject",
                (payload: any) => {
                    if (payload.operation) {
                        dispath(scaleObject({ ...payload }))
                        return
                    }
                    dispath(changeObject({ payload: payload.payload }))
                }
            ],
            [
                "dice",
                (payload: any) => {
                    toast("message", { text: `${payload.roll}!` })
                    dispath(pushLog({ log: `${payload.roll}!` }))
                }
            ],
            [
                "swapMap",
                (payload: any) => {
                    dispath(swapCurrentMap(payload))
                }
            ],
            [
                "view-img",
                (payload: any) => { swapImgView(payload.img) }
            ],
            [
                'sync',
                (payload: any) => { dispath(setSession(payload)) }
            ],
            [
                'pushEntity',
                (payload: any) => { dispath(pushEntity(payload)) }
            ],
            [
                'pushObject',
                (payload: any) => { dispath(pushObject(payload)) }
            ],
            [
                'pushCharacter',
                (payload: any) => { dispath(pushCharacter(payload)) }
            ],
            [
                'pushMap',
                (payload: any) => { dispath(pushMap(payload)) }
            ]
        ])
    }, [])

    const handler = ({ event: { payload, type } }: { event: eventType }) => {
        const fn = actions.get(type)
        console.log({ payload, type })
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
