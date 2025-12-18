import React from 'react'
import { ButtonInGroup } from '@component/ui'
import { useQueryParam } from '@/lib/castom-hook'
import { qParamName } from '@/export'
import { getHTMLData } from '@/lib/function'

interface Props {
    swap: React.MouseEventHandler<HTMLButtonElement>
}


export const ShortVariant: React.FC<Props> = ({ swap }: Props) => {
    const { pushQ } = useQueryParam(qParamName.sContent)

    const swapGameView = (e: React.MouseEvent<HTMLButtonElement>) => {
        pushQ(getHTMLData(e, false, 'value'))
        swap(e)
    }

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
            <ButtonInGroup className='px-3' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/dice.svg' />
            </ButtonInGroup>
            <ButtonInGroup className='px-3' value='queue' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/queue.svg' />
            </ButtonInGroup>
        </div>
    )
}
