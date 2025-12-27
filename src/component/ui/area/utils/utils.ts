import { getSizeInPixel } from "@/lib/function"

export const restObject = {
    fillPatternRepeat: 'no-repeat',
    strokeWidth: 20,
    stroke: "#1f1f1f",
}

export const restQueue = {
    strokeWidth: 40,
    stroke: "oklch(44.4% 0.177 26.899)",
}

export const getScale = (height: number, width: number, size: 1 | 2 | 3 | 4) => {
    return ((getSizeInPixel(size) / 2) / ((height > width ? width : height) / 2))
}