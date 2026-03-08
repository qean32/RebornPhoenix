import React from 'react'
import { getHTMLData, stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { ModalCross, NoFindData } from '@component/ui'
import { CharacterItemInPush } from '@component/ui/item'
import { useAppDispatch } from '@/lib/hook/redux'
import { pushCharacter } from '@/store/session'
import { useRequest } from '@/lib/hook'
import { characterInterface } from '@/model'
import { profileService } from '@/service'
import { usePushCharacterThrow } from '@/lib/hook/throw/use-push-character-throw'

interface Props {
}


export const PushCharacterInSession: React.FC<Props> = ({ }: Props) => {
    const [view, _, clear] = usePushCharacterThrow()
    const dispath = useAppDispatch()
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const data = getHTMLData(e, true)

        if (data) {
            dispath(pushCharacter(data))
        }
    }
    const [characters, loading] = useRequest<characterInterface[]>(() => profileService.GET_CHARACTERS(view ?? 0), [`profile-characters-${view}`])

    return (
        <Modal
            swap={clear}
            view={!!view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="relative bg-color p-5 w-3/7 px-7 rounded-md overflow-scroll flex flex-col -translate-y-1/12" onClick={stopPropagation}>
                <ModalCross onClick={clear} />
                <p className='pb-4 text-2xl'>Персонажи игрока</p>
                {!characters?.length && !loading && <NoFindData title='У игрока нет персонажей!' className='py-5' />}
                {
                    !!characters?.length &&
                    <div className='grid gap-5 py-5 grid-cols-8 min-h-[33vh] max-h-[33vh] overflow-scroll' onClick={clickHandler}>
                        {!!characters?.length &&
                            characters.map(item =>
                                <CharacterItemInPush
                                    {...item}
                                    key={item.id}
                                />
                            )}
                    </div>
                }
            </div>
        </Modal >
    )
}
