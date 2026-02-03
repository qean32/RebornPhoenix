import { CommentBlock } from "@/component/shared/post"
import { Page } from "@component/master/h-order-component"
import { PostContent } from "@component/shared"
import { Crumb } from "@component/ui"
import { usePage } from "@lib/castom-hook"
import { getParamName } from "@lib/function"

export const Post = () => {
    const { } = usePage(getParamName())

    return (
        <Page size="w-[65%]">
            <Crumb />
            <PostContent />
            <CommentBlock />
        </Page>
    )
}