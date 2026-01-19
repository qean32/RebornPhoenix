import { Page } from "@component/master/h-order-component"
import { TextInfo } from "@component/ui"
import { DepartmentItem } from "@component/ui/item"
import { title } from "@/export"
import { usePage, useRequest } from "@lib/castom-hook"
import { forumService } from "@/service"
import { departmentDto } from "@/model"
import { ForumSceleton } from "@/component/case/sceleton"


export const Forum = () => {
    const { } = usePage(title.forum)
    const { finaldata, loading } = useRequest<departmentDto>(forumService.getDepartments, ['departments'])

    return (
        <Page size="w-[70%]">
            <div className="flex gap-5">
                <div className="w-full">
                    <TextInfo title="Форум" />

                    <div className="flex flex-col gap-7">
                        {loading && <ForumSceleton />}
                        {
                            !!finaldata.length &&
                            finaldata.map(item => {
                                return (
                                    <DepartmentItem {...item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Page>
    )
}