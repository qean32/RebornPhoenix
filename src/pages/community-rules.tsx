import { Page } from "@component/master/h-order-component"
import { title } from "@/export"
import { InfoContent } from "@/component/shared"
import { InfoAnchor } from "@/component/ui"
import { usePage } from "@/lib/hook"
import { infoBlockDto } from "@/model"

export const CommunityRules = () => {
    const { } = usePage(title.communityRules)


    return (
        <Page size="w-[85%]" className="pb-20 bg-color-dark">
            <div className="flex gap-5">
                <InfoContent q={q} title={['правила нашего', 'сообщества']} />
                <InfoAnchor qa={qa} />
            </div>
        </Page>
    )
}

const qa: string[] = []
const q: infoBlockDto[] = []
