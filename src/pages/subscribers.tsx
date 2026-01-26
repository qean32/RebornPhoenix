import { Page } from "@component/master/h-order-component"
import { BackArrow, NoFindData, ScrollTop, TextInfo } from "@component/ui"
import { title } from "@/export"
import { usePage, useRequest } from "@lib/castom-hook"
import { profileService } from "@/service"
import { userDto } from "@/model"
import { UserItem } from "@/component/ui/item"
import { CommunitySceleton } from "@/component/case/sceleton"

export const Subscribers = () => {
    const { } = usePage(title.subscribers)
    const [subscribers, loading] = useRequest<userDto[]>(profileService.GET_SUBSCRIBERS, ['my-subscribers'])

    return (
        <Page size="w-[70%]">
            <ScrollTop />
            <BackArrow />
            <div className="relative">
                <TextInfo title="Ваши подписки" />
                {!!loading && <CommunitySceleton />}
                <NoFindData title="У вас нет подписок!" view={!subscribers?.length} className="h-[50vh]" />
                {
                    !!subscribers?.length &&
                    subscribers.map(item => {
                        return <UserItem {...item} key={item.id} />
                    })
                }
            </div>
        </Page>
    )
}