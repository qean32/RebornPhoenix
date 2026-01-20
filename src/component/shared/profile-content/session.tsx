import { ViewAuthor } from "@/component/master/h-order-component"
import { useBoolean, useRequest } from "@/lib/castom-hook"
import { sessionDto } from "@/model"
import { profileService } from "@/service"
import { Modal } from "@component/case/modal"
import { NoFindData, PlusButton } from "@component/ui"
import { SessionItem } from "@component/ui/item"
import React from "react"

interface Props {
    view: boolean
    id: number | string
}
export const Session: React.FC<Props> = ({ id, view }: Props) => {
    const { on, off } = useBoolean(view)
    const [sessions, loading] = useRequest<sessionDto[]>(() => profileService.getSessions(id ?? 0), [`profile-session-${id}`])

    React.useEffect(() => {
        if (view) {
            on()
        } else {
            off()
        }
    }, [view])

    if (!view) {
        return null
    }

    return (
        <div className='flex flex-col py-3'>
            {!!sessions?.length &&
                sessions?.map(item =>
                    <SessionItem key={item.id} {...item} />
                )}
            <NoFindData title="Пользователь не начинал партии" className="min-h-[500px]" view={!sessions?.length && !loading} />
            <ViewAuthor payload_id={id}>
                <Modal.Root modal={Modal.PushSession}>
                    <div className="px-4">
                        <PlusButton className='h-[85px] my-5 mb-2' iconSize='icon-sm' />
                    </div>
                </Modal.Root>
            </ViewAuthor>
        </div>
    )
}