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
    const [reason] = useRequest<banReasonDto>(() => profileService.getBanReason(id), [`ban-reason-${id}`])

    //@ts-ignore
    if (reason?.admin && reason != "no") {

        return (
            <Page size="w-[65%]">
                <div className="rounded-sm pb-15 mb-2 text-2xl">
                    <p>ПРИЧИНЫ БЛОКИРОВКИ</p>
                    <div className="grid grid-cols-2">
                        <p>дата блокировки: </p>
                        <p>{reason.date}</p>
                        <p>время до разблокировки:</p>
                        <p>{reason.date}</p>
                        <p>администратор выдавший блокировку:</p>
                        <Link to={`/profile/${reason.admin.id}/${reason.admin.name}`}
                        >{reason.admin.name}</Link>
                        <p>причина:</p>
                        <p>{reason.reason}</p>
                    </div>
                </div>
            </Page>
        )
    }
}
