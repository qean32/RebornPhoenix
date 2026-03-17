import { FillHoverHint } from '@/component/master/hoc'
import React from 'react'
import { ButtonInGroup } from './button-in-group'
import { saveJson } from '@/lib/function'
import { useToast } from '@/lib/hook'
import { useAppSelector } from '@/lib/hook/redux'
import { EventMiddleware } from '@/lib/middleware'
import { KE } from '@/model'

interface Props {
}


export const SaveSession: React.FC<Props> = React.memo(() => {
    const toast = useToast()
    const save = saveJson(toast)
    const { mode } = useAppSelector(state => state.log)
    const session = useAppSelector(state => state.session)
    const eventSave = EventMiddleware()

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (mode == 'play') {
                eventSave({ payload: session, type: KE.sync }, () => { })
                save()
            }
        }, 300000)

        return () => clearInterval(interval)
    }, [mode])

    return (
        <FillHoverHint title='Сохранить'>
            <ButtonInGroup onClick={save} children={<img className='icon-sm' src='/icon/save.svg' />} />
        </FillHoverHint>
    )
})
