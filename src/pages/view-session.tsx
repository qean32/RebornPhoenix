import { ObjectMoreDetailed, ViewImg } from "@component/case/modal/index-group"
import { SessionLog, ToolGameSubscriber } from "@component/shared"
import React from "react"

const GameAreaSubscriber = React.lazy(() => import("@component/master/game-area-subscriber"))

export const ViewSession = () => {
    return (
        <>
            <ToolGameSubscriber />
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