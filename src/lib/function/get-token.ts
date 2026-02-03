import { tokenStorageKey } from "@/export"
import Cookies from 'js-cookie'

export const getToken = () => {
    return Cookies.get(tokenStorageKey)
}