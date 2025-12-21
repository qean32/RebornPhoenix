import React from 'react'
import { ButtonInGroup } from '@component/ui'
import { initFunctionRoll, toggleFullScreen } from '@/lib/function'
import { FillHoverHint } from '@/component/master/h-order-component'

interface Props {
}


export const ToolGameSubscriber: React.FC<Props> = ({ }: Props) => {
    const roll = initFunctionRoll()

    return (
        <div className='fixed z-10 w-[55px] h-[100%] bg-color-dark transition-700 pt-16 pb-3 flex flex-col'>
            <FillHoverHint title='Испыть удачу' x='right' y='center-y'>
                <ButtonInGroup className='px-3 w-full' fn={roll}>
                    <img className='icon-sm pointer-events-none' src='/icon/dice.svg' />
                </ButtonInGroup>
            </FillHoverHint>
            <FillHoverHint title='Экран' x='right' y='center-y'>
                <ButtonInGroup className='w-full' fn={toggleFullScreen} children={<img className='icon-sm' src='/icon/toggle-full-screen.svg' />} />
            </FillHoverHint>
        </div>
    )
}
