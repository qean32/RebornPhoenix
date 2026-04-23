import { DynamicPagination } from "@component/master"
import { Page } from "@/component/master/hoc"
import { ScrollTop, Search, TextInfo } from "@component/ui"
import { UserItem } from "@component/ui/item"
import { title } from "@/config"
import { usePage } from "@lib/hook"
import { communityService } from "@/service"
import { RQKEYFACTORY } from "@/config/rq-key-factory"

export const Community = () => {
    const { } = usePage(title.COMMUNITY)

    return (
        <Page size="w-[70%]">
            <ScrollTop />
            <div className="relative">
                <TextInfo title="Сообщество" />
                <Search />
                <DynamicPagination
                    rq={{
                        fetch: communityService.GET_USERS,
                        RQKey: [...RQKEYFACTORY.community(), Math.random().toString()],
                        staticParam: []
                    }}
                    className="pt-5"
                    renderItem={(item) => <UserItem {...item} />}
                />
            </div>
        </Page>
    )
}
