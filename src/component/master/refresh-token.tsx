import { useAppSelector } from "@/lib/castom-hook/redux"
import { userDto } from "@/model"
import { profileService } from "@/service"
import { useAppDispatch } from "@/store"
import { setUser } from "@/store/user-store"
import React from "react"

export const RefreshToken: React.FC<{}> = () => {
    const { user } = useAppSelector(state => state.user)
    const dispath = useAppDispatch()

    React.useEffect(() => {
        if (!user) {
            profileService.me()
                // @ts-ignore
                .then((data: { data: userDto[] }) => dispath(setUser(data.data[0])))
        }
    }, [])

    return <></>
}