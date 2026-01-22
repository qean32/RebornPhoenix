import React from 'react'
import { Button } from '.'
import { useBoolean, useDebounceFunction, useToast } from '@/lib/castom-hook'
import { profileService } from '@/service'
import { useParams } from 'react-router-dom'
import { REJECT_SERVER } from '@/export'

interface Props {
    init: boolean
}


export const ButtonSubscription: React.FC<Props> = ({
    init
}: Props) => {
    const { boolean, swap } = useBoolean(init)
    const toast = useToast()
    const { id } = useParams()
    const clickHandler = () => {
        if (!boolean) {
            toast('message', { text: 'Вы подписались!' })
        } else {
            toast('message', { text: 'Вы отписались!' })
        }
        swap()
        subscribe()
    }
    const subscribe = useDebounceFunction(() => {
        profileService.subscribeAction(id ?? 0)
            .catch(() => {
                toast('message', { text: REJECT_SERVER })
                swap()
            })
    }, 1000)

    return (
        <div className="w-fit" title='Подписка'>

            <Button fn={clickHandler} className='mt-2 w-fit'><img src={boolean ? "/icon/subscribe.svg" : "/icon/unsubscribe.svg"} className='icon-sm' alt="" /></Button>
        </div>
    )
}
