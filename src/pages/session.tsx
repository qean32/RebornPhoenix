import { PushCharacterInSession, ViewImg, ActionEntity, ObjectMoreDetailed } from "@component/case/modal/index-group"
import { ToolGameButton, ToolGame } from "@component/shared"
import { usePage, useQueryParam, useRequest } from "@lib/castom-hook"
import { getParamName } from "@lib/function"
import React from "react"
import { GameArea } from "@/component/master"
import { qParamName } from "@/export"
import { useParams } from "react-router-dom"
import { sessionService } from "@/service/session-service"

export const Session = () => {
    const { } = usePage(getParamName())
    const { id } = useParams()
    const [] = useRequest<{ data: string, bestiary: string }>(() => sessionService.getSession(Number(id)), [`session-${id}`])

    return (
        <>
            <ToolGame />
            <main className="h-full z-0 relative">
                <ToolGameButton />
                <GameArea />
            </main >
            <Modal />
        </>
    )
}

const Modal: React.FC = () => {
    const { allQ, clearQParam } = useQueryParam('')


    return (
        <>
            <PushCharacterInSession swap={() => clearQParam(qParamName.pushcharacter)} view={!!allQ[qParamName.pushcharacter]} />
            <ViewImg swap={() => clearQParam(qParamName.viewimg)} view={!!allQ[qParamName.viewimg]} />
            <ObjectMoreDetailed />
            <ActionEntity swap={() => clearQParam(qParamName.actionentity)} view={allQ[qParamName.actionentity]} />
        </>
    )
}