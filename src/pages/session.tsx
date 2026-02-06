import { PushCharacterInSession, ViewImg, ActionEntity, ObjectMoreDetailed } from "@component/case/modal/index-group"
import { ToolGameButton, ToolGame } from "@component/shared"
import { usePage, useQ, useRequest } from "@lib/hook"
import { getParamName, initSetSession } from "@lib/function"
import React from "react"
import { GameArea } from "@/component/master"
import { qpk } from "@/export"
import { useParams } from "react-router-dom"
import { sessionService } from "@/service/session-service"

export const Session = () => {
    const { } = usePage(getParamName())
    const { id } = useParams()
    const [session] = useRequest<{ data: string, bestiary: string }>(() => sessionService.GET_SESSION(Number(id)), [`session-${id}`])
    const setSession = initSetSession()

    React.useEffect(() => {
        if (session?.data) {
            setSession(session)
        }
    }, [session])

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
    const { allQ, clearQParam } = useQ()


    return (
        <>
            <PushCharacterInSession swap={() => clearQParam(qpk.pushcharacter)} view={Number(allQ[qpk.pushcharacter])} />
            <ViewImg swap={() => clearQParam(qpk.viewimg)} view={!!allQ[qpk.viewimg]} />
            <ObjectMoreDetailed />
            <ActionEntity swap={() => clearQParam(qpk.actionentity)} view={allQ[qpk.actionentity] ?? ''} />
        </>
    )
}