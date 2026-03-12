import React from 'react'
import { ButtonInGroup, RollButton } from '@component/ui'
import { getHTMLData } from '@/lib/function'
import { useContentThrow } from '@/lib/hook/throw'

interface Props {
    swap: React.MouseEventHandler<HTMLButtonElement>
}


export const ShortVariant: React.FC<Props> = ({ swap }: Props) => {
    const [_, swapContent] = useContentThrow()

    const swapGameView = (e: React.MouseEvent<HTMLButtonElement>) => {
        swapContent(getHTMLData(e, false, 'value'))
        swap(e)
    }

    return (
        <div className='flex flex-col'>
            <ButtonInGroup className='px-3 py-4' onClick={swap} ><img className='icon-sm rotate-180 translate-x-0.5' src='/icon/double-arrow.svg' /></ButtonInGroup>
            <ButtonInGroup className='px-3' value='bestiary' onClick={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/dragon.svg' />
            </ButtonInGroup>
            <ButtonInGroup className='px-3' value='objects' onClick={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/object.svg' />
            </ButtonInGroup>
            <ButtonInGroup className='px-3' value='characters' onClick={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/user.svg' />
            </ButtonInGroup>
            <RollButton />
            <ButtonInGroup className='px-3' value='queue' onClick={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/queue.svg' />
            </ButtonInGroup>
        </div>
    )
}
