import React from 'react'
import { cn } from '@lib/function'
import { Ava, BanAction, BanPlate } from '.'
import { useRequest } from '@/lib/castom-hook'
import { profileService } from '@/service'
import { useParams } from 'react-router-dom'
import { userDto } from '@/model'

interface Props {
    className?: string
}


export const UserInfo: React.FC<Props> = ({ className }: Props) => {
    const { id } = useParams()
    const { finaldata } = useRequest<Omit<userDto, 'email'>>(() => profileService.getUserInfo(id ?? 0), ['profile-info'])

    return (
        <>
            <div className={cn('flex gap-6 mt-4', className)}>
                <Ava size="ava-lg" path={finaldata[0].ava} className="bg-color-dark" />
                <BanPlate ban />
                <p className="text-3xl">{finaldata[0].name}</p>
            </div>
            <BanAction />
        </>
    )
}
