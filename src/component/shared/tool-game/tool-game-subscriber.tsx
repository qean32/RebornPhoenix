import React from 'react'
import { ButtonInGroup, RollButton } from '@component/ui'
import { toggleFullScreen } from '@/lib/function'
import { FillHoverHint } from '@/component/master/h-order-component'
import { useGridThrow } from '@/lib/hook/throw'

interface Props {
}


export const ToolGameSubscriber: React.FC<Props> = () => {
    const [_, swap] = useGridThrow()

    return (
        <div className='fixed z-10 w-[55px] h-[100%] bg-color-dark transition-700 pt-16 pb-3 flex flex-col'>
            <FillHoverHint title='Экран' x='right' y='center-y'>
                <ButtonInGroup className='w-full' onClick={toggleFullScreen} children={<img className='icon-sm' src='/icon/toggle-full-screen.svg' />} />
            </FillHoverHint>
            <FillHoverHint title='Испыть удачу' x='right' y='center-y'>
                <RollButton force />
            </FillHoverHint>
            <FillHoverHint title='Сетка' x='right' y='center-y'>
                <ButtonInGroup className='w-full' onClick={swap} children={<img className='icon-sm' src='/icon/grid.svg' />} />
            </FillHoverHint>
        </div>
    )
}
