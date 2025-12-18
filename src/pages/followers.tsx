import { GroupContainer } from "@component/master"
import { Page } from "@component/master/h-order-component"
import { BackArrow, ScrollTop, TextInfo } from "@component/ui"
import { UserItem } from "@component/ui/item"
import { title } from "@/export"
import { f_user } from "@/f"
import { usePage } from "@lib/castom-hook"

export const Followers = () => {
    const { } = usePage(title.communty)

    return (
        <Page size="w-[70%]">
            <ScrollTop />
            <BackArrow />
            <div className="relative">
                <TextInfo title="Ваши подписки" />
                <GroupContainer
                    items={f_user}
                    noFindDataText="У вас нет подписок!"
                    className="pt-5"
                    renderItem={(item) => <UserItem {...item} />}
                />
            </div>
        </Page>
    )
}