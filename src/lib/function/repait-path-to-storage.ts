import { isIncludesStoragePath } from "./is-includes-storage-path"

export const repairPathToStorage = (path: string) => {
    // @ts-ignore
    return isIncludesStoragePath(path) ? path : process.env.SERVER_HOST_STORAGE + path
}
