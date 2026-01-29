import { ObjectMoreDetailed, ViewImg } from "@component/case/modal/index-group"
import { ToolGameSubscriber } from "@component/shared"
import { usePage, useQ, useRequest } from "@lib/castom-hook"
import { getParamName, initSetSession } from "@lib/function"
import React from "react"
import { GameAreaSubscriber } from "@/component/master"
import { qpk } from "@/export"
import { sessionService } from "@/service/session-service"
import { useParams } from "react-router-dom"

export const ViewSession = () => {
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