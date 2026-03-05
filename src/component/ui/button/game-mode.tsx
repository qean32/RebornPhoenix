import React from 'react'
import { FillHoverHint } from '../../master/h-order-component'
import { ButtonInGroup } from './button-in-group'
import { useAppSelector } from '@/lib/hook/redux'
import { useAppDispatch } from '@/store'
import { swapMode } from '@/store/log'
import { useToast } from '@/lib/hook'

interface Props {
}


export const GameMode: React.FC<Props> = () => {
    const { isDevMode } = useAppSelector(state => state.log)
    const dispath = useAppDispatch()
    const toast = useToast()
    const swap = () => {
        dispath(swapMode())
        toast('message', { text: 'Режим изменен' })
    }

    return (
        <FillHoverHint title={`Режим ${isDevMode ? "Разработки" : "Игровой"}`}>
            <ButtonInGroup onClick={swap} children={<img className='icon-sm' src={isDevMode ? '/icon/tool.svg' : '/icon/game.svg'} />} />
        </FillHoverHint>
    )
}
