import useImage from "use-image";
import { swapTmpObject, type keysTmp } from '@/store/tmp-object-store'
import { useAppDispatch } from "../redux";
import React from "react";
import { useEvent } from "../use-event";

export const useSubscriberEntity = (dispath: ReturnType<typeof useAppDispatch>, path: string, key: keysTmp, payloadId?: number) => {
    const rectRef = React.useRef<null | HTMLCanvasElement | any>();
    const { event } = useEvent()

    React.useEffect(() => {
        if (event.key == 'change-entity') {
        }
    }, [event])

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

    return { image, mouseOutHandler, mouseOverHandler, clickHandler, rectRef }
}