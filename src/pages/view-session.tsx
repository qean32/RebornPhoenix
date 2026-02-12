import { ObjectMoreDetailed, ViewImg } from "@component/case/modal/index-group"
import { ToolGameSubscriber } from "@component/shared"
import { useQ } from "@lib/hook"
import React from "react"
import { GameAreaSubscriber } from "@/component/master"
import { qpk } from "@/export"

export const ViewSession = () => {
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
    const { param, clearQParam } = useQ(qpk.viewimg)


    return (
        <>
            <ObjectMoreDetailed />
            <ViewImg swap={() => clearQParam(qpk.viewimg)} view={!!param} />
        </>
    )
}