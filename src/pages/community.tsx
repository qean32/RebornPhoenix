import { GroupContainer } from "@component/master"
import { Page } from "@component/master/h-order-component"
import { ScrollTop, Search, TextInfo } from "@component/ui"
import { UserItem } from "@component/ui/item"
import { title } from "@/export"
import { usePage } from "@lib/castom-hook"
import { communityService } from "@/service"
import { CommunitySceleton } from "@/component/case/sceleton"
import React from "react"

export const Community = () => {
    const { } = usePage(title.communty)

    return (
        <Page size="w-[70%]">
            <ScrollTop />
            <div className="relative">
                <TextInfo title="Сообщество" />
                <Search />
                <React.Suspense fallback={<CommunitySceleton />}>
                    <GroupContainer
                        rq={{
                            fetch: communityService.GET_USERS,
                            RQKey: ['community'],
                            staticParam: []
                        }}
                        className="pt-5"
                        renderItem={(item) => <UserItem {...item} />}
                    />
                </React.Suspense>
            </div>
        </Page>
    )
}