import { Page } from "@/component/master/hoc"
import { title } from "@/config"
import { usePage } from "@lib/hook"
import { CreatePostForm } from "@/component/widget/form"

export const CreatePost = () => {
    const { } = usePage(title.CREATE_POST)

    return (
        <Page className="pb-8"><CreatePostForm /></Page>
    )
}
