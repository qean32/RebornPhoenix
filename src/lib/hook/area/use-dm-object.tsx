import React from "react";
import useImage from "use-image";
import { changeObject } from "@/store/session-store";
import { useAppDispatch } from "../redux";

export const useDMObject = (dispath: ReturnType<typeof useAppDispatch>, path: string) => {
    const [image] = useImage(path);

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
        e.target.getStage().container().style.cursor = 'pointer';
        dispath(changeObject({
            payload: {
                id: e.currentTarget.attrs.id,
                position: {
                    y: e.target.attrs.y,
                    x: e.target.attrs.x,
                }
            }
        }))
        // rectRef.current.to({
        //     y: e.target.attrs.y,
        //     x: e.target.attrs.x,
        //     duration: 0.7,
        // })
    };

    const dragMoveHandler = () => {
    };

    const clickHandler = (_e: any | React.MouseEvent<HTMLCanvasElement>) => {
    }

    return { mouseOutHandler, mouseOverHandler, dragMoveHandler, clickHandler, dragEndHandler, dragStartHandler, image, rectRef }
}