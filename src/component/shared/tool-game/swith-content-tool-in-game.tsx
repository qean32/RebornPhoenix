import React from 'react'
import { ButtonInGroup, RollButton } from '@component/ui'
import { useQ } from '@/lib/hook'
import { qpk } from '@/config'
import { getHTMLData } from '@/lib/function'

interface Props {
}


export const SwithContentLiftSideGame: React.FC<Props> = ({ }: Props) => {
    const { pushQ } = useQ(qpk.contentsession)

    const swapGameView = (e: React.MouseEvent<HTMLButtonElement>) => {
        pushQ(getHTMLData(e, false, 'value'))
    }

    return (
        <div className='flex'>
            <ButtonInGroup value='queue' className='w-full py-4 rounded-sm' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/queue.svg' /></ButtonInGroup>
            <ButtonInGroup value='bestiary' className='w-full py-4 rounded-sm' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/dragon.svg' /></ButtonInGroup>
            <ButtonInGroup value='objects' className='w-full py-4 rounded-sm' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/object.svg' /></ButtonInGroup>
            <ButtonInGroup value='characters' className='w-full py-4 rounded-sm' fn={swapGameView}>
                <img className='icon-sm pointer-events-none' src='/icon/user.svg' /></ButtonInGroup>
            <RollButton />
        </div>
    )
}
