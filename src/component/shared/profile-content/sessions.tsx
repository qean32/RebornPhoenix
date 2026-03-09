import { SessionsSceleton } from "@/component/case/sceleton/sessions-sceleton"
import { ViewAuthor } from "@/component/master/h-order-component"
import { modalAnimationEnum } from "@/config"
import { useRequest, useTmpObject } from "@/lib/hook"
import { sessionInterface } from "@/model"
import { profileService } from "@/service"
import { Modal } from "@component/case/modal"
import { NoFindData, PlusButton } from "@component/ui"
import { SessionItem } from "@component/ui/item"
import React from "react"

interface Props {
    id: number | string
}
export const Sessions: React.FC<Props> = ({ id }: Props) => {
    const [sessions, loading, push, _delete] = useRequest<sessionInterface[]>(() => profileService.GET_SESSIONS(id ?? 0), [`profile-session-${id}`], { editable: true })
    const { clearTmp, key, tmpObject } = useTmpObject()

    React.useEffect(() => {
        if (key == 'create-session') {
            push(tmpObject)
            clearTmp()
        }
        if (key == 'delete-session') {
            _delete(tmpObject)
            clearTmp()
        }
    }, [tmpObject])

    return (
        <div className='flex flex-col py-3'>
            {loading && <SessionsSceleton />}
            {!!sessions?.length &&
                sessions?.map(item =>
                    <SessionItem
                        key={item.id}
                        {...item}
                    />
                )}
            {!sessions?.length && !loading && <NoFindData title="Пользователь не начинал партии" className="min-h-[500px]" />}

            <ViewAuthor payload_id={id}>
                <Modal.Root
                    animation={modalAnimationEnum['modal-dft']}
                    modal={Modal.PushSession}>
                    <div>
                        <PlusButton className='h-[85px] my-5 mb-2' iconSize='icon-sm' />
                    </div>
                </Modal.Root>
            </ViewAuthor>
        </div>
    )
}