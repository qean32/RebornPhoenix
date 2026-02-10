import React from 'react'
import { PhoneWarning } from '@/component/master'
import { useEchoPublic } from "@laravel/echo-react";
import { webSocketChannel } from '@/export';

interface Props {
    children: React.ReactNode
}


export const ProtectedRoutePhoneWarning: React.FC<Props> = ({ children }: Props) => {
    const {  } = useEchoPublic(
        `${webSocketChannel}`,
        "EventPrime",
    );

    if (window.innerWidth < 941) {
        return <PhoneWarning />
    }

    return (
        <>
            {children}
        </>
    )
}
