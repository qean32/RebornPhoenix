import React from 'react'
import { TechWork } from '../'
import { serverService } from '@/service'

interface Props {
    children: React.ReactNode
}


export const ProtectedRouteTechWork: React.FC<Props> = ({ children }: Props) => {
    const [response, setResponse] = React.useState(true)
    React.useEffect(() => {
        if (response) {
            serverService.SERVER()
                .catch(() => setResponse(false))
        }
    }, [])

    if (!response) {
        return <TechWork />
    }

    return (
        <>
            {children}
        </>
    )
}
