import { ViewAuthor } from "@/component/master/h-order-component"
import { useBoolean, useRequest } from "@/lib/castom-hook"
import { characterDto } from "@/model"
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
    const [characters, loading] = useRequest<characterDto[]>(() => profileService.getCharacters(id ?? 0), [`profile-characters-${id}`])

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
            {!characters?.length && !loading &&
                <div className="w-full">

                    <NoFindData title="Пользователь не выкладывал статьи" className="min-h-[360px]" view={true} />
                </div>
            }
            <div className='grid gap-5 grid-cols-12 pt-1 adaptive2k-grid-column-15'>
                {!!characters?.length &&
                    characters?.map((item, _) =>
                        <LinkCharacterItem
                            {...item}
                            number={_ + 1}
                            key={item.id}
                        />
                    )}
                <ViewAuthor payload_id={id}>
                    <Modal.Root modal={Modal.PushCharacterInProfile}>
                        <PlusButton className='h-[106px]' iconSize='icon-sm' />
                    </Modal.Root>
                </ViewAuthor>
            </div>
        </>
    )
}