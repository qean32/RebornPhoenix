import { PostInfo, MainBlock, CountBlock } from "@/component/shared/post"
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
            <PostInfo name={""} ava={""} id={0} role={0} />
            <MainBlock content={content} description="" >
                <CountBlock
                    likeCount={0}
                    userLike={false}
                />
            </MainBlock>
        </Page>
    )
}