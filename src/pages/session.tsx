import { PushCharacterInSession, ViewImg, ActionEntity, ObjectMoreDetailed } from "@component/case/modal/index-group"
import { ToolGameButton, ToolGame, SessionLog } from "@component/shared"
import { useQ } from "@lib/hook"
import React from "react"
import { GameArea } from "@/component/master"
import { qpk } from "@/config"

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
    const { allQ, clearQParam } = useQ()


    return (
        <>
            <SessionLog />
            <PushCharacterInSession swap={() => clearQParam(qpk.pushcharacter)} view={Number(allQ[qpk.pushcharacter])} />
            <ViewImg swap={() => clearQParam(qpk.viewimg)} view={!!allQ[qpk.viewimg]} />
            <ObjectMoreDetailed />
            <ActionEntity swap={() => clearQParam(qpk.actionentity)} view={allQ[qpk.actionentity] ?? ''} />
        </>
    )
}