import { Page } from "@/component/master/hoc"
import { title } from "@/config"
import { usePage } from "@lib/hook"
import { CreatePostForm } from "@/component/widget/form"

export const CreatePost = () => {
    const { } = usePage(title.createPost)

    return (
        <Page className="pb-8"><CreatePostForm /></Page>
    )
}
