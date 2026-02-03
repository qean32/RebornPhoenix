import React from "react";
import useImage from "use-image";
import { changeEntity } from "@/store/session-store";
import { useAppDispatch } from "../redux";
import { qpk } from "@/export";
import { useQ } from "../use-q";

export const useDMEntity = (dispath: ReturnType<typeof useAppDispatch>, path: string) => {
    const [image] = useImage(path);
    const { pushQ } = useQ(qpk.actionentity)

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
        dispath(changeEntity({
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

    const clickHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        // dispath(swapTmpObject({ id: e.currentTarget.attrs.id }))
        pushQ(e.currentTarget.attrs.id)
    }

    return { mouseOutHandler, mouseOverHandler, dragMoveHandler, clickHandler, dragEndHandler, dragStartHandler, image, rectRef }
}