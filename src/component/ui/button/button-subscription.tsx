import React from 'react'
import { Button } from '..'
import { useBoolean, useDebounceFunction } from '@/lib/hook'
import { profileService } from '@/service'
import { useParams } from 'react-router-dom'

interface Props {
    init: boolean
}


export const ButtonSubscription: React.FC<Props> = ({
    init
}: Props) => {
    const { boolean, swap } = useBoolean(init)
    const { id } = useParams()
    const clickHandler = () => {
        swap()
        subscribe()
    }
    const subscribe = useDebounceFunction(() => {
        profileService.SUBSCRIBE_ACTION(id ?? 0)
            .catch(swap)
    }, 1000)

    return (
        <div className="w-fit" title='Подписка'>

            <Button fn={clickHandler} className='mt-2 w-fit'><img src={boolean ? "/icon/subscribe.svg" : "/icon/unsubscribe.svg"} className='icon-sm' alt="" /></Button>
        </div>
    )
}
