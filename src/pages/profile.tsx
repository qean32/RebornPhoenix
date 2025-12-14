import { Page, ViewAuthor } from "@component/master/h-order-component"
import { BanReason, ButtonSubscription, LinkPrime, UserInfo } from "@component/ui"
import { ProfileContent, ProfileContentSwith } from "@component/shared/profile-content"
import { usePage } from "@lib/castom-hook"
import { getParamName } from "@lib/function"

export const Profile = () => {
    const { } = usePage(getParamName())

    return (
        <>
            <Page size="w-[65%]">
                <div className="flex-col flex h-full pb-3 overflow-hidden">
                    <UserInfo />
                    <ButtonSubscription init={false} />
                    <ViewAuthor>

                        <LinkPrime
                            className="mt-3 pl-2"
                            path='/followers'
                        >Мои подписки</LinkPrime>
                    </ViewAuthor>
                    <ProfileContentSwith />
                    <ProfileContent />
                    <ViewAuthor>

                        <LinkPrime
                            className="mt-3 pl-2"
                            path='/edit-profile'
                        >Изменить профиль</LinkPrime>
                    </ViewAuthor>
                </div>
            </Page >
            <BanReason />
        </>
    )
}