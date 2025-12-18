import { PushCharacterInSession, ViewImg, ActionEntity } from "@component/case/modal/index-group"
import { ToolGameButton, ToolGame } from "@component/shared"
import { useEntityMore, usePage, useQueryParam } from "@lib/castom-hook"
import { getParamName } from "@lib/function"
import React from "react"
import { GameArea } from "@/component/master"
import { qParamName } from "@/export"
import { EntityMore } from "@/component/case/modal/entity-more-modal"

export const Session = () => {
    const { } = usePage(getParamName())


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
    const { clearTmp, tmpEntity } = useEntityMore()


    return (
        <>
            <PushCharacterInSession swap={() => clearQParam(qParamName.pCharacter)} view={!!allQ[qParamName.pCharacter]} />
            <ViewImg swap={() => clearQParam(qParamName.vImg)} view={!!allQ[qParamName.vImg]} />
            {/* @ts-ignore */}
            <EntityMore swap={clearTmp} view={tmpEntity?.id} />
            <ActionEntity swap={() => clearQParam(qParamName.actionEntity)} view={allQ[qParamName.actionEntity]} />
        </>
    )
}