import React from "react";
import { changeEntity } from "@/store/session";
import useImage from "use-image";
import { useAppDispatch } from "../redux";
import { coordinateType } from "@/model";
import { EventMiddleware } from "@/lib/middleware/event.middleware";
import { useEntityActionThrow } from "../throw";

export const useDMEntity = (position: coordinateType, path: string) => {
    const dispath = useAppDispatch()
    const _position = React.useMemo(() => position, [])
    const event = EventMiddleware()

    const [image] = useImage(path);
    const [_, swapEntityAction] = useEntityActionThrow()

    const rectRef = React.useRef<null | HTMLCanvasElement | any>();

    const mouseOverHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        e.target.getStage().container().style.cursor = 'pointer';
    };

    const mouseOutHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        e.target.getStage().container().style.cursor = 'default';
    };

    const dragStartHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        e.target.getStage().container().style.cursor = 'move';
    };

    const dragEndHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        const payload = {
            id: e.currentTarget.attrs.id,
            position: {
                y: e.target.attrs.y,
                x: e.target.attrs.x,
            },
        }
        event({ payload, type: "change-entity" }, () => { dispath(changeEntity({ payload })) })
        e.target.getStage().container().style.cursor = 'pointer';
    };

    const dragMoveHandler = () => {
    };

    const clickHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        swapEntityAction(e.currentTarget.attrs.id)
    }

    return { mouseOutHandler, mouseOverHandler, dragMoveHandler, clickHandler, dragEndHandler, dragStartHandler, image, rectRef, _position }
}