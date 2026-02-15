export const getSizeInPixel = (code: 1 | 2 | 3 | 4) => {
    if (code == 1) {
        return 80
    }
    if (code == 2) {
        return 100
    }
    if (code == 3) {
        return 120
    }
    return 160
}