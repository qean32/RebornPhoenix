import React from 'react'
import { cn } from '@lib/function'
import { NavigateButton } from '@component/ui'

interface Props {
    className?: string
}


export const Navigate: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('fixed z-50 flex hover:-translate-y-0.5 gap-2 left-1/2 bottom-3 -translate-x-1/2 bg-color-darkness p-2 rounded-md transition-300 hover:py-3', className)}>
            <NavigateButton link='/' path='/icon/home.svg' />
            <NavigateButton link='/forum' path='/icon/news.svg' />
            <NavigateButton link='/community' path='/icon/community.svg' />
            <NavigateButton link='/profile/777/zxccursed' path='/icon/user.svg' />
            <NavigateButton link='/session/777/zxccursed' path='/icon/dice.svg' />
            <NavigateButton link='/faq' path='/icon/faq.svg' />
        </div>
    )
}
