import { useAppDispatch, useAppSelector } from "@lib/castom-hook/redux"
import { useRequest } from "./use-request"
import { profileService } from "@/service"
import { setUser } from "@/store/user-store"
import { userDto } from "@/model"

export const useUser = () => {
    const dispath = useAppDispatch()
    const { user } = useAppSelector(state => state.user)

    if (!user) {
        const { finaldata } = useRequest<userDto>(profileService.me, ['me'])

        if (finaldata[0]) {
            dispath(setUser(finaldata[0]))
        }
    }

    return { ...user }
}