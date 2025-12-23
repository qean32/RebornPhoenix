import { getSizeInPixel } from "@/lib/function"

export const restObject = {
    fillPatternRepeat: 'no-repeat',
    strokeWidth: 20,
    stroke: "#1f1f1f",
}

export const restQueue = {
    strokeWidth: 30,
    stroke: "#8b0000",
}

export const getScale = (height: number, width: number, size: 1 | 2 | 3 | 4) => {
    return ((getSizeInPixel(size) / 2) / ((height > width ? width : height) / 2))
}