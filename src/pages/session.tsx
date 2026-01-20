import { PushCharacterInSession, ViewImg, ActionEntity } from "@component/case/modal/index-group"
import { ToolGameButton, ToolGame } from "@component/shared"
import { usePage, useQueryParam, useRequest } from "@lib/castom-hook"
import { getParamName } from "@lib/function"
import React from "react"
import { GameArea } from "@/component/master"
import { qParamName } from "@/export"
import { ObjectMoreDetailed } from "@/component/case/modal/object-more-detailed"
import { sessionDto } from "@/model"
import { useParams } from "react-router-dom"
import { sessionService } from "@/service/session-service"
import { useAppDispatch } from "@/store"
import { setSession } from "@/store/session-store"

export const Session = () => {
    const { } = usePage(getParamName())
    const { id } = useParams()
    const dispath = useAppDispatch()
    const [session] = useRequest<sessionDto>(() => sessionService.getSession(Number(id)), [`session-${id}`])
    React.useEffect(() => {
        dispath(setSession({
            bestiary: [],
            imgs: '',
            session: session
        }))
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