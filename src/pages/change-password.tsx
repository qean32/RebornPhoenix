import { ChangePasswordForm } from "@component/widget/form"
import { title } from "@/config"
import { usePage } from "@lib/hook"
import { PageWindow } from "@/component/master/hoc"

export const ChangePassword = () => {
    const { } = usePage(title.CHANGE_PASSWORD)

    return (
        <PageWindow><ChangePasswordForm /></PageWindow>
    )
}
