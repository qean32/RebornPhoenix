import { ContextMenu } from '@/component/master/h-order-component'
import { stopPropagation } from '@/lib/function'
import React from 'react'
import { ContextMenuItem } from './context-menu-item'
import { useTmpObject, useToast } from '@/lib/hook'
import { REJECT_SERVER } from '@/config'
import { profileService } from '@/service'

interface Props {
    id: number
}

const ACCEESS_ACTION = 'Сессия удалена'
export const CharacterMenu: React.FC<Props> = ({ id }: Props) => {
    const toast = useToast()
    const { setTmp } = useTmpObject()

    const remove = () => {
        toast('message', { text: 'Отправка..' }, 2000)
        profileService.DELETE_CHARACTER(id)
            .then(({ status, data }) => {
                if (status == 200) {
                    toast('message', { text: ACCEESS_ACTION })
                    // @ts-ignore                    
                    setTmp({ key: 'delete-character', payload: data })
                }
            })
            .catch(() => toast('message', { text: REJECT_SERVER }))
    }

    return (
        <div className="absolute right-0.5 z-50 top-1" onClick={stopPropagation}>
            <ContextMenu>
                <ContextMenuItem fn={remove}>Удалить</ContextMenuItem>
            </ContextMenu>
        </div>
    )
}
