import Cookies from "js-cookie"
import { userStorageKey } from "@/export"

export const setUser = (data: any) => {
    const cookie = Cookies.get(userStorageKey) ?? null
    const user = cookie ? JSON.parse(cookie) : null
    Cookies.set(userStorageKey, JSON.stringify({ ...user, ...data }))
}