import { ViewAuthor } from "@/component/master/h-order-component"
import { modalAnimationEnum } from "@/config"
import { useRequest, useTmpObject } from "@/lib/hook"
import { characterInterface } from "@/model"
import { profileService } from "@/service"
import { Modal } from "@component/case/modal"
import { NoFindData, PlusButton } from "@component/ui"
import { LinkCharacterItem } from "@component/ui/item"
import React from "react"


interface Props {
    id: number | string
}

export const Characters: React.FC<Props> = ({ id }: Props) => {
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

    return (
        <>
            <div className='grid gap-5 grid-cols-12 pt-1 adaptive2k-grid-column-15'>
                {!!characters?.length &&
                    characters?.map((item, _) =>
                        // @ts-ignore
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
            {!characters?.length && !loading && <NoFindData title="У пользователя нет персонажей!" className="min-h-[260px] w-full" />}
        </>
    )
}