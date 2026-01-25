import { ObjectMoreDetailed, ViewImg } from "@component/case/modal/index-group"
import { ToolGameSubscriber } from "@component/shared"
import { usePage, useQueryParam, useRequest } from "@lib/castom-hook"
import { getParamName } from "@lib/function"
import React from "react"
import { GameAreaSubscriber } from "@/component/master"
import { qParamName } from "@/export"
import { sessionDto } from "@/model"
import { sessionService } from "@/service/session-service"
import { useAppDispatch } from "@/store"
import { setSession } from "@/store/session-store"
import { useParams } from "react-router-dom"

export const ViewSession = () => {
    const { } = usePage(getParamName())
    const { id } = useParams()
    const dispath = useAppDispatch()
    const [session] = useRequest<sessionDto>(() => sessionService.GET_SESSION(Number(id)), [`session-${id}`])
    React.useEffect(() => {
        dispath(setSession({
            bestiary: [],
            session: session,
            info: {
                bestiary: '',
                session: ''
            }
        }))
    }, [session])


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
    const { param, clearQParam } = useQueryParam(qParamName.viewimg)


    return (
        <>
            <ObjectMoreDetailed />
            <ViewImg swap={() => clearQParam(qParamName.viewimg)} view={!!param} />
        </>
    )
}