import React from 'react'
import { ContextMenu } from '@component/master/h-order-component'
import { ContextMenuItem } from './context-menu-item'
import { useAppDispatch } from '@/lib/castom-hook/redux'
import { pushEntity } from '@/store/session-store'
import { entityDto } from '@/model'
import { Initiative } from '@/component/ui'
import { swapTmpObject } from '@/store/tmp-object'
interface Props extends entityDto {
}


export const BestiaryMenu: React.FC<Props> = (item: Props) => {
    const dispath = useAppDispatch()
    const pushHandler = () => dispath(pushEntity(item))
    const moreHandler = () => dispath(swapTmpObject({ payload: { id: item.idInBestiary }, key: 'more' }))

    return (
        <ContextMenu className='z-20'>
            <Initiative title={item.initiative} className='mx-3 mb-3' />
            <ContextMenuItem fn={pushHandler}>Добавить</ContextMenuItem>
            <ContextMenuItem fn={moreHandler}>Подробнее</ContextMenuItem>
        </ContextMenu>
    )
}
