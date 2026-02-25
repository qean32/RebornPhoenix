import { sizeType } from "@/model"

const map = new Map<number, number>([
    [1, 20],
    [2, 40],
    [3, 60],
    [4, 80],
    [5, 100],
    [6, 120],
    [7, 140],
    [8, 160],
    [9, 180],
])

export const getSizeInPixel = (size: sizeType) => {
    return map.get(size)
}