import { Page, ViewAuthor } from "@/component/master/hoc"
import { BanAction, BanReason, ButtonSubscription, LinkPrime, Logout, NoFindData, UserInfo } from "@component/ui"
import { ProfileContent, ProfileContentSwith } from "@/component/shared/profile"
import { usePage, useRequest } from "@lib/hook"
import { getParamName } from "@lib/function"
import { useParams } from "react-router-dom"
import { userInterface } from "@/model"
import { profileService } from "@/service"
import { RQKQYFACTORY } from "@/config/rq-key-factory"

export const Profile = () => {
    const { } = usePage(getParamName())
    const { id } = useParams()
    const [user, loading] = useRequest<Omit<userInterface, 'email'>>(() => profileService.GET_USER_INFO(id ?? 0), RQKQYFACTORY.profileInfo(id ?? 0))
    const [sub] = useRequest(() => profileService.GET_SUBSCRIBE(Number(id)), RQKQYFACTORY.mySubscribe())

    if (!user?.id && !loading) {
        return <NoFindData title="Пользователь не найден!" className="py-5" />
    }

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
