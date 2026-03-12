import { ObjectMoreDetailed, ViewImg } from "@component/widget/modal/index-group"
import { SessionLog, ToolSessionSubscriber } from "@component/shared"
import React from "react"

const GameAreaSubscriber = React.lazy(() => import("@component/master/game-area-subscriber"))

export const ViewSession = () => {
    return (
        <>
            <ToolSessionSubscriber />
            <main className="h-full max-h-[100vh] z-0 relative">
                <GameAreaSubscriber />
            </main >
            <Modal />
        </>
    )
}

const Modal: React.FC = () => {

    return (
        <>
            <SessionLog />
            <ObjectMoreDetailed />
            <ViewImg />
        </>
    )
}
