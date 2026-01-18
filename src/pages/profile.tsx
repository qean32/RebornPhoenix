import { Page, ViewAuthor } from "@component/master/h-order-component"
import { BanReason, ButtonSubscription, LinkPrime, UserInfo } from "@component/ui"
import { ProfileContent, ProfileContentSwith } from "@component/shared/profile-content"
import { usePage, useRequest, useToast } from "@lib/castom-hook"
import { getParamName } from "@lib/function"
import { useNavigate, useParams } from "react-router-dom"
import { userDto } from "@/model"
import { profileService } from "@/service"
import Cookies from "js-cookie"
import { tokenStorageKey, userStorageKey } from "@/export"

export const Profile = () => {
    const { } = usePage(getParamName())
    const toast = useToast()
    const navigate = useNavigate()
    const { id } = useParams()
    const { finaldata: user } = useRequest<Omit<userDto, 'email'>>(() => profileService.getUserInfo(id ?? 0), [`profile-info-${id}`])
    const { finaldata: sub } = useRequest(() => profileService.getSubscribe(Number(id)), [`get-subscribe-${id}`])
    const logout = () => {
        Cookies.remove(tokenStorageKey)
        Cookies.remove(userStorageKey)
        toast('message', { text: 'Выход..' })
        setTimeout(() => {
            navigate('/')
        }, 600)
    }

    return (
        <>
            <Page size="w-[65%]">
                <div className="flex-col flex h-full pb-3 overflow-hidden">
                    <UserInfo user={user[0]} />
                    <ViewAuthor payload_id={user[0]?.id}>
                        <LinkPrime
                            className="mt-3 pl-2"
                            path='/subscribers'
                        >Мои подписки</LinkPrime>
                    </ViewAuthor>
                    <ProfileContentSwith />
                    <ViewAuthor payload_id={user[0]?.id} reverse>
                        <ButtonSubscription init={!!sub} />
                    </ViewAuthor>
                    <ProfileContent />
                    <ViewAuthor payload_id={user[0]?.id}>
                        <LinkPrime
                            className="mt-3 pl-2"
                            path='/edit-profile'
                        >Изменить профиль</LinkPrime>
                        <p className="pl-2 text-red-800 cursor-pointer" onClick={logout} >Выход</p>
                    </ViewAuthor>
                </div>
            </Page >
            <BanReason id={id ?? 0} />
        </>
    )
}