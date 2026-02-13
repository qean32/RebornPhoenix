import { userStorageKey } from "@/config"
import { userInterface } from "@/model"
import Cookies from "js-cookie"

export const setUserCookie = (data: userInterface) => {
    if (data)
        Cookies.set(userStorageKey, JSON.stringify(data), {
            expires: (1 * 365 * 24 * 60 * 60)
        })
}