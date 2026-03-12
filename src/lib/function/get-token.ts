import { tokenStorageKey } from "@/config"
import Cookies from 'js-cookie'

export const getToken = () => {
    return Cookies.get(tokenStorageKey)
}