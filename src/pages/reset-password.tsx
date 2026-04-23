import { ResetPasswordForm } from "@component/widget/form"
import { title } from "@/config"
import { usePage } from "@lib/hook"
import { PageWindow } from "@/component/master/hoc"

export const ResetPassword = () => {
    const { } = usePage(title.EDIT_PROFILE)

    return (
        <PageWindow><ResetPasswordForm /></PageWindow>
    )
}
