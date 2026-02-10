import { ViewAuthor } from "@/component/master/h-order-component"
import { modalAnimationEnum } from "@/export"
import { useBoolean, useRequest, useTmpObject } from "@/lib/hook"
import { characterInterface } from "@/model"
import { profileService } from "@/service"
import { Modal } from "@component/case/modal"
import { NoFindData, PlusButton } from "@component/ui"
import { LinkCharacterItem } from "@component/ui/item"
import React from "react"


interface Props {
    view: boolean
    id: number | string
}

export const Character: React.FC<Props> = ({ id, view }: Props) => {
    const { on, off } = useBoolean(view)
    const [characters, loading, push, _delete] = useRequest<characterInterface[]>(() => profileService.GET_CHARACTERS(id ?? 0), [`profile-characters-${id}`], { editable: true })
    const { clearTmp, key, tmpObject } = useTmpObject()

    React.useEffect(() => {
        if (key == 'create-character') {
            push(tmpObject)
            clearTmp()
        }
        if (key == 'delete-character') {
            _delete(tmpObject)
            clearTmp()
        }
    }, [tmpObject])

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
        <>
            <div className='grid gap-5 grid-cols-12 pt-1 adaptive2k-grid-column-15'>
                {!!characters?.length &&
                    characters?.map((item, _) =>
                        <LinkCharacterItem
                            {...item}
                            key={item.id}
                        />
                    )}

                <ViewAuthor payload_id={id}>
                    <Modal.Root
                        animation={modalAnimationEnum['modal-dft']}
                        modal={Modal.PushCharacterInProfile}>
                        <PlusButton className='h-[110px] min-w-[85px]' iconSize='icon-sm' />
                    </Modal.Root>
                </ViewAuthor>

            </div>
            <NoFindData title="У пользователя нет персонажей!" className="min-h-[360px] w-full" view={!characters?.length && !loading} />
        </>
    )
}