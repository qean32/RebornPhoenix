import { useRequest } from "./use-request"
import { profileService } from "@/service"
import { userDto } from "@/model"
import Cookies from "js-cookie"
import { userStorageKey } from "@/export"
import { setUser } from "../function"

export const useUser = (set: boolean = false): userDto => {
    const cookie = Cookies.get(userStorageKey) ?? null
    const user = cookie ? JSON.parse(cookie) : null

    if (set) {
        const { finaldata } = useRequest<userDto>(profileService.me, ['me'])

        if (finaldata[0]) {
            setUser(finaldata[0])
        }
    }

    return { ...user }
}