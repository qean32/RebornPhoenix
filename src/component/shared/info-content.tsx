import React from 'react'
import { InfoBlock } from '../ui'
import { qpk } from '@/export'
import { useQ } from '@/lib/castom-hook'
import { ViewImg } from '../case/modal/img-view-modal'
import { infoBlockDto } from '@/model'

interface Props {
    q: infoBlockDto[]
    title: string[]
}


export const InfoContent: React.FC<Props> = ({ q, title }: Props) => {
    const { pushQ, pushQParam } = useQ()

    return (
        <>
            <div className="w-10/12 pb-5">
                <p className="text-4xl uppercase">{title[0]} <span className="text-red-800 text-4xl">{title[1]}</span></p>
                {q.map(({ content, title }, index) => {
                    return (
                        <InfoBlock
                            key={title}
                            id={index}
                            pushQParam={pushQParam}
                            content={content}
                            pushQ={pushQ}
                            title={title}
                        />
                    )
                })}
            </div>

            <Modal />
        </>
    )
}

const Modal = () => {
    const { param, clearQParam } = useQ()
    return (
        <ViewImg swap={() => clearQParam(qpk.viewimg)} view={param} />
    )
}

