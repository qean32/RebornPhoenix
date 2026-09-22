import { imgsExtansions } from "@/config"

export const isImageFile = (path: string) => {
    // @ts-ignore
    return imgsExtansions.includes(path.split('.').at(-1))
}
