import React from "react"
import { GroupContainer } from "@component/master"
import { PostColumn, ScrollTop, Search, TextInfo } from "@component/ui"
import { Page } from "@component/master/h-order-component"
import { useParams } from "react-router-dom"
import { PostItem } from "@component/ui/item"
import { FilterForum } from "@component/shared"
import { usePage, useRequest } from "@lib/castom-hook"
import { getParamName } from "@lib/function"
import { forumService } from "@/service"
import { departmentOptions } from "@/export"
import { postDto } from "@/model/post.dto"


export const Department = () => {
    const { } = usePage(getParamName())

    return (
        <Page size="w-[75%]">
            <div className="flex gap-10">
                <FilterForum />
                <MainSideForum />
            </div>
        </Page>
    )
}

const MainSideForum: React.FC<{}> = ({ }: {}) => {
    const { name } = useParams()
    const departmentId = departmentOptions.find(item => item.value.toLocaleLowerCase() == (name ?? '').toLocaleLowerCase())?.id
    const { finaldata } = useRequest<postDto>(() => forumService.getFixedPost(departmentId ?? 0), [('get-fixed' + departmentId)])

    return (
        <div className="relative w-full">
            <ScrollTop />
            <TextInfo title={name ? name.toUpperCase() : ''} />
            <>
                <Search />
            </>
            <PostColumn />
            <div className="pb-4">
                {finaldata[0] && <PostItem {...finaldata[0]} fixed={true} className="pl-2" />}
            </div>
            <GroupContainer
                rq={{
                    fetch: forumService.getDepartmentPost,
                    RQKey: ['department-post'],
                    staticParam: [departmentId]
                }}
                renderItem={(item) => <PostItem {...item} className="pl-2" />}
            />
        </div>
    )
}