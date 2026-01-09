import { PostInfo, MainBlock, CommentBlock, CountBlock } from "@/component/shared/post"
import { f_user } from "@/f"
import { Page } from "@component/master/h-order-component"
import { Crumb } from "@component/ui"
import { usePage } from "@lib/castom-hook"
import { getParamName } from "@lib/function"
import { useParams } from "react-router-dom"

export const PreviewPost = () => {
    const { } = usePage(getParamName())
    const { content } = useParams()

    return (
        <Page size="w-[65%]">
            <Crumb />
            <PostInfo {...f_user[0]} />
            <MainBlock content={content}>
                <CountBlock
                    likeCount={0}
                    userLike={false}
                />
            </MainBlock>
            <CommentBlock comments={[]} />
        </Page>
    )
}