import { GroupContainer } from "@component/master"
import { Page } from "@component/master/h-order-component"
import { ScrollTop, Search, TextInfo } from "@component/ui"
import { UserItem } from "@component/ui/item"
import { title } from "@/export"
import { usePage } from "@lib/castom-hook"
import { communityService } from "@/service"

export const Community = () => {
    const { } = usePage(title.communty)

    return (
        <Page size="w-[70%]">
            <ScrollTop />
            <div className="relative">
                <TextInfo title="Сообщество" />
                <Search />
                <GroupContainer
                    rq={{
                        fetch: communityService.getUsers,
                        RQKey: ['community'],
                    }}
                    className="pt-5"
                    renderItem={(item) => <UserItem {...item} />}
                />
            </div>
        </Page>
    )
}