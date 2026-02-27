import { getSizeInPixel } from "@/lib/function"
import { sizeType } from "@/model"

export const restObject = {
    fillPatternRepeat: 'no-repeat',
    stroke: "#1f1f1f",
}

export const restQueue = {
    stroke: "oklch(44.4% 0.177 26.899)",
}

export const getScale = (height: number, width: number, size: sizeType) => {
    return ((getSizeInPixel(size) / 2) / ((height > width ? width : height) / 2))
}