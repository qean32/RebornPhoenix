import React from 'react'
import { ViewAdmin } from '../master/h-order-component'
import { Button } from './button'
import { Modal } from '../case/modal'
import { AccessAction } from '../case/modal/access-action-modal'
import { profileService } from '@/service'
import { useToast } from '@/lib/castom-hook'
import { useParams } from 'react-router-dom'

interface Props {
    ban: boolean
}

const ACCEESS_ACTION = 'Пользовтель разбанен'
const REJECT_ACTION = 'Ошибка'

export const BanAction: React.FC<Props> = ({ ban }: Props) => {
    const { id } = useParams()
    const toast = useToast()
    const banAction = () => {
        profileService.banAction({}, id ?? 0)
            .then(() => toast('message', { text: ACCEESS_ACTION }))
            .catch(() => toast('message', { text: REJECT_ACTION }))
            .finally(() => {
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            })
    }
    return (
        <ViewAdmin>
            <div className="flex gap-2">
                {
                    ban ?
                        <Modal.Root modal={AccessAction} props={{ fn: banAction, warning: "Вы собираетесь снять блокировку?", warningButtonText: 'Снять блокировку' }}>
                            <Button className='mt-3 w-fit'>Снять блокировку</Button>
                        </Modal.Root>
                        :
                        <Modal.Root modal={Modal.Ban}>
                            <Button className='mt-3 w-fit'>Выдать блокировку</Button>
                        </Modal.Root>
                }
            </div>
        </ViewAdmin>
    )
}
