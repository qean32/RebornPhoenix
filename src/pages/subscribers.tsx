import { Page } from "@component/master/h-order-component"
import { BackArrow, NoFindData, ScrollTop, TextInfo } from "@component/ui"
import { title } from "@/export"
import { usePage, useRequest } from "@lib/hook"
import { profileService } from "@/service"
import { userInterface } from "@/model"
import { UserItem } from "@/component/ui/item"
import { CommunitySceleton } from "@/component/case/sceleton"
import React from "react"

export const Subscribers = () => {
    const { } = usePage(title.subscribers)

    return (
        <Page size="w-[70%]">
            <ScrollTop />
            <BackArrow />
            <div className="relative">
                <TextInfo title="Ваши подписки" />
                <React.Suspense fallback={<CommunitySceleton />}>
                    <Content />
                </React.Suspense>
            </div>
        </Page>
    )
}

const Content: React.FC<{}> = ({ }: {}) => {
    const [subscribers] = useRequest<userInterface[]>(profileService.GET_SUBSCRIBERS, ['my-subscribers'], { suspense: true })

    return (
        <>
            <NoFindData title="У вас нет подписок!" view={!subscribers?.length} className="h-[50vh]" />
            {
                !!subscribers?.length &&
                subscribers.map(item => {
                    return <UserItem {...item} key={item.id} />
                })
            }
        </>
    )
}
