import useImage from "use-image";

export const useSubscriber = (path: string) => {
    const mouseOverHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        e.target.getStage().container().style.cursor = 'pointer';
    };

    const mouseOutHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        e.target.getStage().container().style.cursor = 'default';
    };

    const [image] = useImage(path)

    return { image, mouseOutHandler, mouseOverHandler }
}