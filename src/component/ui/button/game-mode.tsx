import React from 'react'
import { FillHoverHint } from '../../master/hoc'
import { ButtonInGroup } from './button-in-group'
import { useAppSelector } from '@/lib/hook/redux'
import { useAppDispatch } from '@/store'
import { swapMode } from '@/store/log'
import { useToast } from '@/lib/hook'

interface Props {
}


export const GameMode: React.FC<Props> = () => {
    const { mode } = useAppSelector(state => state.log)
    const dispath = useAppDispatch()
    const isDev = mode == 'dev'
    const toast = useToast()
    const swap = () => {
        dispath(swapMode())
        toast('message', { text: 'Режим изменен' })
    }

    return (
        <FillHoverHint title={`Режим ${isDev ? "Разработки" : "Игровой"}`}>
            <ButtonInGroup onClick={swap} children={<img className='icon-sm' src={isDev ? '/icon/tool.svg' : '/icon/game.svg'} />} />
        </FillHoverHint>
    )
}
