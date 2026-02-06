import React from 'react'
import { ButtonInGroup } from '@component/ui'
import { useQ } from '@/lib/hook'
import { qpk } from '@/export'
import { getHTMLData, initFunctionRoll } from '@/lib/function'

interface Props {
    swap: React.MouseEventHandler<HTMLButtonElement>
}


export const ShortVariant: React.FC<Props> = ({ swap }: Props) => {
    const { pushQ } = useQ(qpk.contentsession)

    const swapGameView = (e: React.MouseEvent<HTMLButtonElement>) => {
        pushQ(getHTMLData(e, false, 'value'))
        swap(e)
    }
    const roll = initFunctionRoll()

    return (
        <div className='flex flex-col'>
            <ButtonInGroup className='px-3 py-4' fn={swap} ><img className='icon-sm rotate-180 translate-x-0.5' src='/icon/double-arrow.svg' /></ButtonInGroup>
            <ButtonInGroup className='px-3' value='bestiary' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/dragon.svg' />
            </ButtonInGroup>
            <ButtonInGroup className='px-3' value='objects' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/object.svg' />
            </ButtonInGroup>
            <ButtonInGroup className='px-3' value='characters' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/user.svg' />
            </ButtonInGroup>
            <ButtonInGroup className='px-3' fn={roll}>
                <img className='icon-sm pointer-events-none' src='/icon/dice.svg' />
            </ButtonInGroup>
            <ButtonInGroup className='px-3' value='queue' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/queue.svg' />
            </ButtonInGroup>
        </div>
    )
}
