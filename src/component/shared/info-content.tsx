import React from 'react'
import { InfoBlock } from '@component/ui'
import { ViewImg } from '@component/widget/modal/img-view-modal'
import { infoBlockType } from '@/model'

interface Props {
    q: infoBlockType[]
    title: string[]
}


export const InfoContent: React.FC<Props> = ({ q, title }: Props) => {
    return (
        <>
            <div className="w-10/12 pb-5">
                <p className="text-4xl uppercase">{title[0]} <span className="text-red-800 text-4xl">{title[1]}</span></p>
                {q.map(({ content, title }, index) => {
                    return (
                        <InfoBlock
                            key={title}
                            id={index}
                            content={content}
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

    return (
        <ViewImg />
    )
}

