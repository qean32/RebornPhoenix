import { AuthForm, RegistrationForm } from "@component/case/form"
import { Page } from "@component/master/h-order-component"
import { AuthBackground } from "@component/ui"
import { title } from "@/export"
import { usePage } from "@lib/hook"

export const Auth = () => {
    const { } = usePage(title.authorization)

    return (
        <Page className="pt-10" size="w-[50%]">
            <div className="w-full flex justify-center h-[70vh]">
                <div className="bg-color-dark rounded-lg w-full flex relative py-15">
                    <AuthBackground />
                    <RegistrationForm />
                    <AuthForm />
                </div>
            </div>
        </Page>
    )
}