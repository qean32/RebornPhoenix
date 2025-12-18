import { userDto } from "@/model"
import { setUser } from "@/store/user-store"
import { useAppDispatch, useAppSelector } from "@lib/castom-hook/redux"

export const useUser = () => {
    const dispath = useAppDispatch()
    const user = useAppSelector(state => state.user)

    const setUser_ = (data: userDto) => {
        dispath(setUser(data))
    }

    return { user, setUser_ }
}