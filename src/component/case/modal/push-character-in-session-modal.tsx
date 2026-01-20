import React from 'react'
import { getHTMLData, stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { Button, ModalCross, NoFindData } from '@component/ui'
import { CharacterItemInPush } from '@component/ui/item'
import { useAppDispatch } from '@/lib/castom-hook/redux'
import { pushCharacter } from '@/store/session-store'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}


export const PushCharacterInSession: React.FC<Props> = ({ view, swap }: Props) => {
    const dispath = useAppDispatch()
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const data = getHTMLData(e, true)

        if (data) {
            dispath(pushCharacter(data))
        }
    }
    return (
        <Modal
            swap={swap}
            view={view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="relative bg-color p-5 w-3/7 px-7 rounded-md overflow-scroll flex flex-col -translate-y-1/12" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <p className='pb-4 text-2xl'>Персонажи игрока</p>
                <NoFindData title='У игрока нет персонажей!' view={false} className='py-5' />
                <div className='grid gap-5 py-5 grid-cols-8 min-h-[33vh] max-h-[33vh] overflow-scroll' onClick={clickHandler}>
                    {[].map((__, _) =>
                        <CharacterItemInPush
                            key={_}
                            id={_ + 1}
                            name='КлиганКлиган'
                            status={'stable'}
                            path={'/img/carousel-item-7.jpg'}
                            size={1}
                            user={{}}
                        />
                    )}
                </div>
                <div className="flex justify-end gap-2">
                    <><Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                        <Button variant='acceess' ><p>Добавить</p></Button></>
                </div>
            </div>
        </Modal >
    )
}
