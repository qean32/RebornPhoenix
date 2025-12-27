import { Page } from "@component/master/h-order-component"
import { title } from "@/export"
import { FaqContent } from "@/component/shared"
import { FaqAnchor } from "@/component/ui"
import { usePage } from "@/lib/castom-hook"

export const Faq = () => {
    const { } = usePage(title.faq)

    return (
        <Page size="w-[85%]" className="pb-20 bg-color-dark">
            <div className="flex gap-5">
                <FaqContent />
                <FaqAnchor />
            </div>
        </Page>
    )
}