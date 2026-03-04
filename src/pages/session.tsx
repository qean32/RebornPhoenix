import { PushCharacterInSession, ViewImg, ActionEntity, ObjectMoreDetailed } from "@component/case/modal/index-group"
import { ToolGameButton, ToolGame, SessionLog } from "@component/shared"
import React from "react"

const GameArea = React.lazy(() => import("@component/master/game-area"))

export const Session = () => {
    return (
        <>
            <ToolGame />
            <main className="h-full max-h-[100vh] z-0 relative">
                <ToolGameButton />
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