import { onTry, setUser } from "@/store/user"
import { useAppDispatch } from "../hook/redux"
import { profileService } from "@/service"
import { setUserCookie } from '@lib/function'
import { useUser } from "../hook"

export const initSetUser = async (force: boolean = false) => {
    const dispath = useAppDispatch()
    const { _try, user } = useUser()

    if ((!user && !_try) || force) {
        if (!_try) { dispath(onTry()) }

        await profileService.me().then((res) => {
            setUserCookie(res)
            dispath(setUser(res))
        })
    }
}
