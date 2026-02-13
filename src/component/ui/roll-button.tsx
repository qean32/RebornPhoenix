import React from 'react'
import { ButtonInGroup } from './button-in-group'
import { initFunctionRoll } from '@/lib/function'

interface Props {
    force?: boolean
}


export const RollButton: React.FC<Props> = ({ force = false }: Props) => {
    const roll = initFunctionRoll(force)

    return (
        <ButtonInGroup className='w-full py-4 rounded-sm' fn={roll}>
            <img className='icon-sm pointer-events-none' src='/icon/dice.svg' /></ButtonInGroup>
    )
}
