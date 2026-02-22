import React from 'react'
import { ViewAdmin } from '../../master/h-order-component'
import { Button } from '../button/button'
import { Modal } from '../../case/modal'
import { AccessAction } from '../../case/modal/access-action-modal'
import { profileService } from '@/service'
import { useToast } from '@/lib/hook'
import { useParams } from 'react-router-dom'
import { modalAnimationEnum } from '@/config'
import { handleFetchCatch, handleFetchThen } from '@/lib/function'

interface Props {
    ban: boolean
}

const ACCEESS_ACTION = 'Пользовтель разбанен'
export const BanAction: React.FC<Props> = ({ ban }: Props) => {
    const { id } = useParams()
    const toast = useToast()
    const banAction = () => {
        profileService.BAN_ACTION({}, id ?? 0)
            .then(response => handleFetchThen(response, toast, ACCEESS_ACTION))
            .catch(response => handleFetchCatch(response, toast))
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
                    !!ban ?
                        <Modal.Root
                            animation={modalAnimationEnum['modal-dft']}
                            modal={AccessAction}
                            props={{ fn: banAction, warning: "Вы собираетесь снять блокировку?", warningButtonText: 'Снять блокировку' }}>
                            <Button className='mt-3 w-fit'>Снять блокировку</Button>
                        </Modal.Root>
                        :
                        <Modal.Root
                            animation={modalAnimationEnum['modal-dft']}
                            modal={Modal.Ban}>
                            <Button className='mt-3 w-fit'>Выдать блокировку</Button>
                        </Modal.Root>
                }
            </div>
        </ViewAdmin>
    )
}
