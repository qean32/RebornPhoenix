import React from "react";
import useImage from "use-image";
import { changeObject } from "@/store/session-store";
import { useAppDispatch } from "../redux";
import { EventMiddleware } from "@/lib/middleware";

export const useDMObject = (dispath: ReturnType<typeof useAppDispatch>, path: string) => {
    const [image] = useImage(path);

    const rectRef = React.useRef<null | HTMLCanvasElement | any>();

    const event = EventMiddleware()

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
            }
        }
        e.target.getStage().container().style.cursor = 'pointer';
        event({ payload, type: "change-object" }, () => {
            dispath(changeObject({
                payload: {
                    id: e.currentTarget.attrs.id,
                    position: {
                        y: e.target.attrs.y,
                        x: e.target.attrs.x,
                    }
                }
            }))
        })
    };

    const dragMoveHandler = () => {
    };

    const clickHandler = (_e: any | React.MouseEvent<HTMLCanvasElement>) => {
    }

    return { mouseOutHandler, mouseOverHandler, dragMoveHandler, clickHandler, dragEndHandler, dragStartHandler, image, rectRef }
}