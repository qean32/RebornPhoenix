import { FillHoverHint } from '@/component/master/h-order-component'
import React from 'react'
import { ButtonInGroup } from './button-in-group'
import { saveJson } from '@/lib/function'
import { useToast } from '@/lib/hook'
import { useAppSelector } from '@/lib/hook/redux'
import { EventMiddleware } from '@/lib/middleware'

interface Props {
}


export const SaveSession: React.FC<Props> = React.memo(() => {
    const toast = useToast()
    const save = saveJson(toast)
    const { isDevMode } = useAppSelector(state => state.log)
    const session = useAppSelector(state => state.session)
    const eventSave = EventMiddleware()

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (!isDevMode) {
                eventSave({ payload: session, type: 'sync' }, () => { })
                save()
            }
        }, 300000)

        return () => clearInterval(interval)
    }, [])

    return (
        <FillHoverHint title='Сохранить'>
            <ButtonInGroup onClick={save} children={<img className='icon-sm' src='/icon/save.svg' />} />
        </FillHoverHint>
    )
})
