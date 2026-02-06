import { ChangePasswordForm } from "@component/case/form"
import { title } from "@/export"
import { usePage } from "@lib/hook"
import { PageWindow } from "@/component/master/h-order-component"

export const ChangePassword = () => {
    const { } = usePage(title.changePassword)

    return (
        <PageWindow><ChangePasswordForm /></PageWindow>
    )
}