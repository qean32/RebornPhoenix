import React from 'react'
import { Button } from '.'
import { useBoolean, useToast } from '@/lib/castom-hook'

interface Props {
    init: boolean
}


export const ButtonSubscription: React.FC<Props> = ({
    init
}: Props) => {
    const { boolean, swap } = useBoolean(init)
    const toast = useToast()
    const clickHandler = () => {
        toast('message', { text: 'Вы подписались!' })
        swap()
    }

    return (
        <Button fn={clickHandler} className='mt-2 w-fit'><img src={boolean ? "/icon/user.svg" : "/icon/community.svg"} className='icon-sm' alt="" /></Button>
    )
}
