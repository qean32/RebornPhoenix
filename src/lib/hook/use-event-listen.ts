import { eventKey } from "@/config";
import { useEchoPublic } from "@laravel/echo-react";
import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "./redux";
import { eventType, KE } from "@/model";
import { changeEntity, changeObject, pushCharacter, pushEntity, pushMap, pushObject, scaleObject, swapCurrentMap, pushImg } from "@/store/session";
import { useToast } from "./use-toast";
import { pushLog } from "@/store/log";
import { useViewImgThrow } from "./throw";
import { initSetSession } from "../function";


export const useEventListen = () => {
    const { id } = useParams();
    const dispath = useAppDispatch();
    const toast = useToast()
    const setSession = initSetSession()
    const [_, swapImgView] = useViewImgThrow()

    const actions = React.useMemo(() => {
        return new Map<KE, (payload: any) => void>([
            [KE.changeEntity, payload => dispath(changeEntity(payload))],
            [KE.changeObject, payload => {
                if (payload?.payload?.operation) {
                    dispath(scaleObject(payload))
                    return
                }
                dispath(changeObject(payload))
            }],
            [KE.dice, payload => {
                toast("message", { text: `${payload.roll}!` })
                dispath(pushLog({ log: `${payload.roll}!` }))
            }],
            [KE.swapCurrentMap, payload => dispath(swapCurrentMap(payload))],
            [KE.viewImg, payload => swapImgView(payload.img)],
            [KE.pushImg, payload => pushImg(payload)],
            [KE.sync, payload => { setSession(payload) }],
            [KE.pushEntity, payload => dispath(pushEntity({ ...payload, isFromConnect: true }))],
            [KE.pushObject, payload => dispath(pushObject({ ...payload, isFromConnect: true }))],
            [KE.pushCharacter, payload => dispath(pushCharacter({ ...payload, isFromConnect: true }))],
            [KE.pushMap, payload => dispath(pushMap({ ...payload, isFromConnect: true }))],
        ])
    }, [])

    const handler = ({ event: { payload, type } }: { event: eventType }) => {
        const fn = actions.get(type)
        console.log(fn)
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
