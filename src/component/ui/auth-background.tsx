import React from 'react'
import { useBoolean } from '@lib/castom-hook'
import { cn } from '@lib/function'

interface Props {
    text?: string
}


export const AuthBackground: React.FC<Props> = ({ text }: Props) => {
    const { boolean, swap } = useBoolean(false)

    return (
        <div className={cn("h-full w-1/2 z-20 top-0 absolute transition-700", (!boolean && 'translate-x-full'))} onClick={() => !text && swap()}>
            <div className="h-full items-center cursor-pointer flex justify-center arrow-auth-relative">
                <div
                    className={cn(
                        "rounded-md h-full w-full bg-shadow bg-color bg-img transition-300"
                    )}
                    style={{ backgroundImage: `url(${'/img/auth.jpg'})` }}
                ></div>
                <p className="absolute text-md rotate-270 translate-y-full arrow-auth transition-300">{!boolean ? text ? text : '>' : '>'}</p>
                <p className="absolute text-3xl">{!boolean ? text ? text : 'ВХОД' : 'РЕГИСТРАЦИЯ'}</p>
            </div>
        </div>
    )
}
