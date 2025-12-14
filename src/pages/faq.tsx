import { Page } from "@component/master/h-order-component"
import { title } from "@/export"
import { changeTitle } from "@/lib/function"
import { FaqContent } from "@/component/shared"
import { FaqAnchor } from "@/component/ui"

export const Faq = () => {
    changeTitle(title.faq)

    return (
        <Page size="w-[85%]">
            <div className="flex gap-5">
                <FaqContent />
                <FaqAnchor />
            </div>
        </Page>
    )
}