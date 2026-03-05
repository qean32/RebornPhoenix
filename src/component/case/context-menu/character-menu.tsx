import { ContextMenu } from '@/component/master/h-order-component'
import { handleFetchCatch, handleFetchThen, stopPropagation } from '@/lib/function'
import React from 'react'
import { ContextMenuItem } from './context-menu-item'
import { useTmpObject, useToast } from '@/lib/hook'
import { profileService } from '@/service'

interface Props {
    id: number
}

const ACCEESS_ACTION = 'Персонаж удален'
export const CharacterMenu: React.FC<Props> = ({ id }: Props) => {
    const toast = useToast()
    const { setTmp } = useTmpObject()

    const remove = () => {
        profileService.DELETE_CHARACTER(id)
            .then(response => handleFetchThen(response, toast, ACCEESS_ACTION, () => {
                setTmp({ key: 'delete-character', payload: { id } })
            }))
            .catch(response => handleFetchCatch(response, toast))
    }

    return (
        <div className="absolute right-0.5 z-50 top-1" onClick={stopPropagation}>
            <ContextMenu>
                <ContextMenuItem onClick={remove}>Удалить</ContextMenuItem>
            </ContextMenu>
        </div>
    )
}
