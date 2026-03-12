const imgsEnd: string[] = [
    'png', 'svg', 'jpg', 'webp', 'jpeg'
]

export const isImageFile = (path: string) => {
    // @ts-ignore
    return imgsEnd.includes(path.split('.').at(-1))
}
