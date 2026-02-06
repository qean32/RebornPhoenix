import { ResetPasswordForm } from "@component/case/form"
import { title } from "@/export"
import { usePage } from "@lib/hook"
import { PageWindow } from "@/component/master/h-order-component"

export const ResetPassword = () => {
    const { } = usePage(title.editProfile)

    return (
        <PageWindow><ResetPasswordForm /></PageWindow>
    )
}