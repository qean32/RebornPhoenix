import React from 'react'
import { cn } from '@/lib/function'
import { PushFromJSON } from './push-from-json'
import { PushFromForm } from './push-from-form'
import { useBoolean } from '@/lib/hook'

interface Props {
    swap: React.MouseEventHandler<HTMLButtonElement>
}


export const PushObject: React.FC<Props> = ({ swap }: Props) => {
    const switcher = useBoolean(true)

    return (
        <div className="w-[25%] h-full flex flex-col json-push relative">
            <div className="w-full overflow-hidden h-full">
                <div className={cn("w-[200%] flex h-full transition-300", (switcher.boolean && "-translate-x-1/2"))}>
                    <PushFromForm
                        swap={swap}
                        switcher={switcher}
                    />
                    <PushFromJSON
                        swap={swap}
                        switcher={switcher}
                    />
                </div>
            </div>
        </div>
    )
}
