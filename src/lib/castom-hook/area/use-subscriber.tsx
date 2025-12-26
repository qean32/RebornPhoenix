import useImage from "use-image";
import { swapTmpObject, type key } from '@/store/tmp-object'
import { useAppDispatch } from "../redux";

export const useSubscriber = (dispath: ReturnType<typeof useAppDispatch>, path: string, key: key, payloadId?: number) => {
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

    return { image, mouseOutHandler, mouseOverHandler, clickHandler }
}