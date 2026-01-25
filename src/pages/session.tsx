import { PushCharacterInSession, ViewImg, ActionEntity, ObjectMoreDetailed } from "@component/case/modal/index-group"
import { ToolGameButton, ToolGame } from "@component/shared"
import { usePage, useQueryParam, useRequest } from "@lib/castom-hook"
import { getParamName } from "@lib/function"
import React from "react"
import { GameArea } from "@/component/master"
import { qParamName } from "@/export"
import { useParams } from "react-router-dom"
import { sessionService } from "@/service/session-service"
import { useAppDispatch } from "@/lib/castom-hook/redux"
import { setSession } from "@/store/session-store"

export const Session = () => {
    const { } = usePage(getParamName())
    const { id } = useParams()
    const [session] = useRequest<{ data: string, bestiary: string }>(() => sessionService.GET_SESSION(Number(id)), [`session-${id}`])
    const dispath = useAppDispatch()

    React.useEffect(() => {
        const fn = async () => {
            const data = fetch(`${process.env.SERVER_HOST}api/static/${session.data}/`)
            const bestiary = fetch(`${process.env.SERVER_HOST}api/static/${session.bestiary}/`)
            const jsonData = (await data).json()
            const jsonBestiary = (await bestiary).json()

            dispath(setSession({
                bestiary: await jsonBestiary,
                session: await jsonData,
                info: {
                    bestiary: session.bestiary,
                    session: session.data
                }
            }))
        }
        if (session?.data)
            fn();
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
            <PushCharacterInSession swap={() => clearQParam(qParamName.pushcharacter)} view={Number(allQ[qParamName.pushcharacter])} />
            <ViewImg swap={() => clearQParam(qParamName.viewimg)} view={!!allQ[qParamName.viewimg]} />
            <ObjectMoreDetailed />
            <ActionEntity swap={() => clearQParam(qParamName.actionentity)} view={allQ[qParamName.actionentity]} />
        </>
    )
}