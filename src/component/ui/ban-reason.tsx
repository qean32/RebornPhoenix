import React from 'react'
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
    if (reason && reason != "no") {

        return (
            <Page size="w-[65%]">
                <div className="rounded-sm pb-15 mb-2 text-2xl">
                    <p>ПРИЧИНЫ БЛОКИРОВКИ</p>
                    <div className="grid grid-cols-2">
                        <p>дата блокировки: </p>
                        {/* @ts-ignore */}
                        <p>{reason.banTime}</p>
                        <p>время до разблокировки:</p>
                        {/* @ts-ignore */}
                        <p>{reason.unbanTime}</p>
                        <p>администратор выдавший блокировку:</p>
                        <p>
                            {/* @ts-ignore */}
                            {reason.nameAdmin}
                        </p>
                        <p>причина:</p>
                        <p>{reason.reason}</p>
                    </div>
                </div>
            </Page>
        )
    }
}
