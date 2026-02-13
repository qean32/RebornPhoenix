import { tokenStorageKey } from "@/config"
import Cookies from "js-cookie"

export const setToken = (token: string) => {
    if (token)
        Cookies.set(tokenStorageKey, token, {
            expires: (1 * 365 * 24 * 60 * 60)
        })
}