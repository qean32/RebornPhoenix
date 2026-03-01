import React, { MouseEventHandler } from 'react'
import { ButtonInGroup } from '@component/ui'

interface Props {
    swap: MouseEventHandler<HTMLButtonElement>
}


export const Arrow: React.FC<Props> = ({ swap }: Props) => {
    return (
        <div className='relative'>
            <ButtonInGroup className='absolute right-0.5 translate-x-full bg-color-dark rounded-r-sm bg-color-dark-hover top-2' onClick={swap}>
                <img src='/icon/double-arrow.svg' className='bg-color-dark rounded-r-sm icon-sm' />
            </ButtonInGroup>
        </div>
    )
}
