import React from 'react'
import { getHTMLData, stopPropagation } from '@/lib/function'
import { ModalCross, NoFindData } from '@component/ui'
import { UserInModal } from '@/component/ui/item'
import { useQueryParam } from '@/lib/castom-hook'
import { qParamName } from '@/export'

interface Props {
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const Users: React.FC<Props> = ({ swap }: Props) => {
    const { pushQ } = useQueryParam(qParamName.pushcharacter)

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        pushQ(getHTMLData(e, true).id)
    }
    return (
        <div className='relative bg-color h-full w-[320px]' onClick={stopPropagation} >
            <ModalCross fn={swap} />
            <div className="pt-10" onClick={clickHandler}>
                <p className='pl-5 pb-5'>Добавить персонажа игрока</p>
                {[1, 2, 2, 2, 2].map(() => {
                    return (
                        <UserInModal ava='' id={1} email='' name='' />
                    )
                })}
                <NoFindData title='В компании нет игроков!' view={!true} className='pt-10' />
            </div>
        </div>
    )
}
