import { Page } from "@component/master/h-order-component"
import { TextInfo } from "@component/ui"
import { DepartmentItem } from "@component/ui/item"
import { title } from "@/export"
import { usePage, useRequest } from "@lib/hook"
import { forumService } from "@/service"
import { departmentDto } from "@/model"
import { ForumSceleton } from "@/component/case/sceleton"
import React from "react"


export const Forum = () => {
    const { } = usePage(title.forum)

    return (
        <Page size="w-[70%]">
            <div className="flex gap-5">
                <div className="w-full">
                    <TextInfo title="Форум" />
                    <React.Suspense fallback={<ForumSceleton />}>
                        <Content />
                    </React.Suspense>
                </div>
            </div>
        </Page>
    )
}

const Content: React.FC<{}> = ({ }: {}) => {
    const [departments] = useRequest<departmentDto[]>(forumService.GET_DEPARTAMENTS, ['departments'], { suspense: true })

    return (
        <div className="flex flex-col gap-7">
            {
                !!departments?.length &&
                departments?.map(item => {
                    return (
                        <DepartmentItem key={item.id} {...item} />
                    )
                })
            }
        </div>
    )
}
