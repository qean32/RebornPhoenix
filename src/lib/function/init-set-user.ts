import { setUser, swapTry } from "@/store/user-store"
import { useAppDispatch } from "../hook/redux"
import { userInterface } from "@/model"
import { useUser } from "../hook"
import { profileService } from "@/service"

export const initSetUser = async (force: boolean = false) => {
    const dispath = useAppDispatch()
    const { user, _try } = useUser()

    if (!_try)
        dispath(swapTry())

    if ((!user && !_try) || force) {
        // @ts-ignore
        const userData: userInterface = await profileService.me()

        if (await userData?.id) {

            dispath(setUser(userData))
        }
    }
}