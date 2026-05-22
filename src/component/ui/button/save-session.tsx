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
    // это все по хорошему надо обернуть в асинхроную операцию типа сначала сохранить и про успешном отослать всем
    const eventSave = EventMiddleware()

    React.useEffect(() => {
        const interval = setInterval(() => {
            save()
            eventSave({ payload: { data: session.info.session, bestiary: session.info.bestiary }, type: KE.sync }, () => { })
        }, 300000)

        return () => clearInterval(interval)
    }, [mode])

    return (
        <FillHoverHint title='Сохранить'>
            <ButtonInGroup onClick={() => {
                save()
                eventSave({ payload: { data: session.info.session, bestiary: session.info.bestiary }, type: KE.sync }, () => { })
            }} children={<img className='icon-sm' src='/icon/save.svg' />} />
        </FillHoverHint>
    )
})
