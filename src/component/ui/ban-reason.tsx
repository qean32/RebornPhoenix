import React from 'react'
import { Link } from 'react-router-dom'
import { Page } from '@component/master/h-order-component'
import { useRequest } from '@/lib/castom-hook'
import { profileService } from '@/service'
import { banReasonDto } from '@/model'

interface Props {
    id: string | number
}


export const BanReason: React.FC<Props> = ({ id }: Props) => {
    const { finaldata: reason } = useRequest<banReasonDto>(() => profileService.getBanReason(id), [('ban-reson' + id)])

    return (
        <Page size="w-[65%]">
            {/* @ts-ignore */}
            {reason[0] && reason[0] != "no" &&
                <div className="rounded-sm pb-15 mb-2 text-2xl">
                    <p>ПРИЧИНЫ БЛОКИРОВКИ</p>
                    <div className="grid grid-cols-2">
                        <p>дата блокировки: </p>
                        <p>{reason[0].date}</p>
                        <p>время до разблокировки:</p>
                        <p>{reason[0].date}</p>
                        <p>администратор выдавший блокировку:</p>
                        <Link to={`/profile/${reason[0].admin.id}/${reason[0].admin.name}`}
                        >{reason[0].admin.name}</Link>
                        <p>причина:</p>
                        <p>{reason[0].reason}</p>
                    </div>
                </div>
            }
        </Page>
    )
}
