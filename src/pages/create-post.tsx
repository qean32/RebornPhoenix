import { Page } from "@component/master/h-order-component"
import { title } from "@/export"
import { usePage } from "@lib/hook"
import { CreatePostForm } from "@/component/case/form"

export const CreatePost = () => {
    const { } = usePage(title.createPost)

    return (
        <Page className="pb-8"><CreatePostForm /></Page>
    )
}
