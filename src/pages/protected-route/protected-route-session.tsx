import React from 'react'
import { ViewSession } from '../'
import { getParamName, initSetSession } from '@/lib/function'
import { usePage, useRequest, useUser } from '@/lib/hook'
import { sessionService } from '@/service/session-service'
import { useParams } from 'react-router-dom'
import { sessionInfoDto } from '@/model'

interface Props {
    children: React.ReactNode
}


export const ProtectedRouteSession: React.FC<Props> = ({ children }: Props) => {
    const { id } = useParams()
    const setSession = initSetSession()
    const [session] = useRequest<sessionInfoDto>(
        () => sessionService.GET_SESSION(Number(id))
            .then(response => {
                if (response) {
                    setSession(response)
                }

                return response
            }),
        [`session-${id}`]
    )
    const { user } = useUser()
    const { } = usePage(getParamName())

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
