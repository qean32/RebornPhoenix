import React from 'react'
import { cn } from '@lib/function'
import { Ava, IsOnline, Logo } from '@component/ui'
import { Link } from 'react-router-dom'
import { slogan } from '@/export'
import { useUser } from '@/lib/castom-hook'

interface Props {
    className?: string
}


export const Header: React.FC<Props> = ({ className }: Props) => {
    const { id, name, ava } = useUser()

    return (
        <header className={cn('bg-color-darkness z-50 flex justify-around py-2.5 items-center', className)}>
            <div className="absolute right-3 top-5"><IsOnline /></div>
            <div className='flex gap-2'>
                <p className='cursor-pointer'>{slogan}</p>
            </div>
            <Logo variant='short' />
            <Link className='flex gap-4 items-center' to={!id ? '/auth' : `/profile/${id}/${name}`}>
                <p className='cursor-pointer'>{!id ? 'Вход' : 'Профиль'}</p>
                <Ava path={ava ?? ''} size='ava-sm' />
            </Link>
        </header>
    )
}
