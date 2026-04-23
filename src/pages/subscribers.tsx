import { Page } from "@/component/master/hoc"
import { BackArrow, NoFindData, ScrollTop, TextInfo } from "@component/ui"
import { title } from "@/config"
import { usePage, useRequest } from "@lib/hook"
import { profileService } from "@/service"
import { userInterface } from "@/model"
import { UserItem } from "@/component/ui/item"
import { CommunitySceleton } from "@/component/widget/sceleton"
import React from "react"
import { RQKEYFACTORY } from "@/config/rq-key-factory"

export const Subscribers = () => {
    const { } = usePage(title.SUBSCRIBERS)

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

const Content: React.FC<{}> = () => {
    const [subscribers] = useRequest<userInterface[]>(profileService.GET_SUBSCRIBERS, RQKEYFACTORY.mySubscribers())

    return (
        <>
            {!subscribers?.length && <NoFindData title="У вас нет подписок!" className="h-[50vh]" />}
            {
                !!subscribers?.length &&
                subscribers.map(item => {
                    return <UserItem {...item} key={item.id} />
                })
            }
        </>
    )
}
