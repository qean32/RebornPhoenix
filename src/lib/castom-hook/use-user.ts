import { useRequest } from "./use-request"
import { profileService } from "@/service"
import { userDto } from "@/model"
import Cookies from "js-cookie"
import { userStorageKey } from "@/export"

export const useUser = (set: boolean = false) => {
    const user = JSON.parse(Cookies.get(userStorageKey) as string)

    if (set) {
        const { finaldata } = useRequest<userDto>(profileService.me, ['me'])

        if (finaldata[0]) {
            Cookies.set(userStorageKey, JSON.stringify(finaldata[0]))
        }
    }

    return { ...user }
}