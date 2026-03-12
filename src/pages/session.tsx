import { PushCharacterInSession, ViewImg, ActionEntity, ObjectMoreDetailed } from "@component/widget/modal/index-group"
import { ToolSessionButton, ToolSession, SessionLog } from "@component/shared"
import React from "react"

const GameArea = React.lazy(() => import("@component/master/game-area"))

export const Session = () => {
    return (
        <>
            <ToolSession />
            <main className="h-full max-h-[100vh] z-0 relative">
                <ToolSessionButton />
                <GameArea />
            </main >
            <Modal />
        </>
    )
}

const Modal: React.FC = () => {

    return (
        <>
            <SessionLog />
            <PushCharacterInSession />
            <ViewImg />
            <ObjectMoreDetailed />
            <ActionEntity />
        </>
    )
}
