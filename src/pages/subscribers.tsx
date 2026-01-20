import { Page } from "@component/master/h-order-component"
import { BackArrow, ScrollTop, TextInfo } from "@component/ui"
import { title } from "@/export"
import { usePage, useRequest } from "@lib/castom-hook"
import { profileService } from "@/service"
import { userDto } from "@/model"
import { UserItem } from "@/component/ui/item"

export const Subscribers = () => {
    const { } = usePage(title.subscribers)
    const [subscribers, loading] = useRequest<userDto[]>(profileService.getSubscribers, ['my-subscribers'])

    return (
        <Page size="w-[70%]">
            <ScrollTop />
            <BackArrow />
            <div className="relative">
                <TextInfo title="Ваши подписки" />
                {loading && <p>загрузка</p>}
                {
                    !!subscribers?.length &&
                    subscribers.map(item => {
                        return <UserItem {...item} />
                    })
                }
            </div>
        </Page>
    )
}