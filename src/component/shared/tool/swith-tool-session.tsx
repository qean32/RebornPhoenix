import React from 'react'
import { ButtonInGroup, RollButton } from '@component/ui'
import { getHTMLData } from '@/lib/function'
import { useContentThrow } from '@/lib/hook/throw'

interface Props {
}


export const SwithLeftSideSession: React.FC<Props> = () => {
    const [_, swap] = useContentThrow()

    const swapGameView = (e: React.MouseEvent<HTMLButtonElement>) => {
        swap(getHTMLData(e, false, 'value'))
    }

    return (
        <div className='flex'>
            <ButtonInGroup value='queue' className='w-full py-4 rounded-sm' onClick={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/queue.svg' /></ButtonInGroup>
            <ButtonInGroup value='bestiary' className='w-full py-4 rounded-sm' onClick={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/dragon.svg' /></ButtonInGroup>
            <ButtonInGroup value='objects' className='w-full py-4 rounded-sm' onClick={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/object.svg' /></ButtonInGroup>
            <ButtonInGroup value='characters' className='w-full py-4 rounded-sm' onClick={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/user.svg' /></ButtonInGroup>
            <RollButton />
        </div>
    )
}
