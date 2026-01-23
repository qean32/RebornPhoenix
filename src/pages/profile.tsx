import { Page, ViewAuthor } from "@component/master/h-order-component"
import { BanAction, BanReason, ButtonSubscription, LinkPrime, Logout, UserInfo } from "@component/ui"
import { ProfileContent, ProfileContentSwith } from "@component/shared/profile-content"
import { usePage, useRequest } from "@lib/castom-hook"
import { getParamName } from "@lib/function"
import { useParams } from "react-router-dom"
import { userDto } from "@/model"
import { profileService } from "@/service"

export const Profile = () => {
    const { } = usePage(getParamName())
    const { id } = useParams()
    const [user] = useRequest<Omit<userDto, 'email'>>(() => profileService.getUserInfo(id ?? 0), [`profile-info-${id}`])
    const [sub] = useRequest(() => profileService.getSubscribe(Number(id)), [`get-subscribe-${id}`])

    return (
        <>
            <Page size="w-[65%]" className="overflow-hidden" >
                <div className="flex-col flex h-full pb-3">
                    <UserInfo user={user} />
                    <div className="flex gap-5 mt-1">
                        <ViewAuthor payload_id={user?.id}>
                            <LinkPrime
                                className="mt-3 pl-2"
                                path='/subscribers'
                            >Мои подписки</LinkPrime>
                        </ViewAuthor>
                        <ViewAuthor payload_id={user?.id} reverse>
                            <ButtonSubscription init={!!sub} />
                        </ViewAuthor>
                    </div>
                    <ProfileContentSwith />
                    <ProfileContent />
                </div>
                <ViewAuthor payload_id={user?.id}>
                    <LinkPrime
                        className="mt-3 pl-2"
                        path='/edit-profile'
                    >Изменить профиль</LinkPrime>
                    <Logout />
                </ViewAuthor>
                <BanAction ban={user?.ban ?? false} />
            </Page >
            {!!user?.ban &&
                <BanReason id={id ?? 0} />
            }
        </>
    )
}