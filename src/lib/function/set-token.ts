import { expires, tokenStorageKey } from "@/config"
import Cookies from "js-cookie"

export const setToken = (token: string) => {
    if (token)
        Cookies.set(tokenStorageKey, token, {
            expires
        })
}