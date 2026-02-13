import useImage from "use-image";
import { swapTmpObject, type keysTmp } from '@/store/tmp-object-store'
import { useAppDispatch } from "../redux";
import React from "react";
import { coordinateType } from "@/model";

export const useSubscriber = (position: coordinateType, path: string, key: keysTmp, payloadId?: number) => {
    const dispath = useAppDispatch()
    const _position = React.useMemo(() => position, [])

    const rectRef = React.useRef<null | HTMLCanvasElement | any>();

    React.useEffect(() => {
        if (position) {

            rectRef.current.to({
                y: position.y,
                x: position.x,
                duration: .1,
            })
        }
    }, [position])

    const mouseOverHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        e.target.getStage().container().style.cursor = 'pointer';
    };

    const mouseOutHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        e.target.getStage().container().style.cursor = 'default';
    };

    const clickHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        dispath(swapTmpObject({ payload: { id: payloadId ?? e.currentTarget.attrs.id }, key }))
    }

    const [image] = useImage(path)

    return { image, mouseOutHandler, mouseOverHandler, clickHandler, rectRef, _position }
}