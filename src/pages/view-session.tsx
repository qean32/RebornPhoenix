import { ViewImg } from "@component/case/modal/index-group"
import { ToolGameSubscriber } from "@component/shared"
import { usePage, useQueryParam } from "@lib/castom-hook"
import { getParamName } from "@lib/function"
import React from "react"
import { GameAreaSubscriber } from "@/component/master"
import { qParamName } from "@/export"

export const ViewSession = () => {
    const { } = usePage(getParamName())


    return (
        <>
            <ToolGameSubscriber />
            <main className="h-full z-0 relative">
                <GameAreaSubscriber />
            </main >
            <Modal />
        </>
    )
}

const Modal: React.FC = () => {
    const { param, clearQParam } = useQueryParam(qParamName.vImg)


    return (
        <>
            <ViewImg swap={() => clearQParam(qParamName.vImg)} view={!!param} />
        </>
    )
}