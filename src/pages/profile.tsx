import { Page, ViewAuthor } from "@component/master/h-order-component"
import { BanReason, ButtonSubscription, LinkPrime, UserInfo } from "@component/ui"
import { ProfileContent, ProfileContentSwith } from "@component/shared/profile-content"
import { usePage, useRequest } from "@lib/castom-hook"
import { getParamName } from "@lib/function"
import { useParams } from "react-router-dom"
import { userDto } from "@/model"
import { profileService } from "@/service"

export const Profile = () => {
    const { } = usePage(getParamName())
    const { id } = useParams()
    const { finaldata: user } = useRequest<Omit<userDto, 'email'>>(() => profileService.getUserInfo(id ?? 0), ['profile-info'])
    const { finaldata: sub } = useRequest(() => profileService.getSubscribe(Number(id)), ['get-subscribe'])

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
                    </ViewAuthor>
                </div>
            </Page >
            <BanReason id={id ?? 0} />
        </>
    )
}