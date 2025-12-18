import { tokenKey } from "@/export"
import Cookies from "js-cookie"

export const setToken = (token: string) => {
    if (token)
        Cookies.set(tokenKey, token)
}