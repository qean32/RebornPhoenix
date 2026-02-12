import React from 'react'
import { ViewSession } from '../'
import { getParamName, initSetSession } from '@/lib/function'
import { useEventListen, usePage, useRequest, useUser } from '@/lib/hook'
import { sessionService } from '@/service/session-service'
import { useParams } from 'react-router-dom'

interface Props {
    children: React.ReactNode
}


export const ProtectedRouteSession: React.FC<Props> = ({ children }: Props) => {
    const { id } = useParams()
    const [session] = useRequest<{ data: string, bestiary: string }>(() => sessionService.GET_SESSION(Number(id)), [`session-${id}`])
    const setSession = initSetSession()
    const { user } = useUser()
    const { } = usePage(getParamName())
    useEventListen()

    React.useEffect(() => {
        if (session?.data) {
            setSession(session)
        }
    }, [session])

    // @ts-ignore
    if (user?.id != session?.DM) {
        return <>
            <ViewSession />
        </>
    }

    return (
        <>
            {children}
        </>
    )
}
