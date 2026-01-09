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
    id: number
}
export const Session: React.FC<Props> = ({ id, view }: Props) => {
    const { on, off } = useBoolean(view)

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
    const { finaldata } = useRequest<sessionDto>(() => profileService.getSessions(id ?? 0), ['profile-session'])

    return (
        <div className='flex flex-col py-3'>
            {!!finaldata.length &&
                finaldata.map((__, _) =>
                    <SessionItem key={_} id={_ + 1} name={'ПерваяПерваяПервая'} />
                )}
            <NoFindData title="Пользователь не выкладывал статьи" className="min-h-[500px]" view={false} />
            <ViewAuthor>
                <Modal.Root modal={Modal.PushSession}>
                    <div className="px-4">
                        <PlusButton className='h-[85px] my-5 mb-2' iconSize='icon-sm' />
                    </div>
                </Modal.Root>
            </ViewAuthor>
        </div>
    )
}