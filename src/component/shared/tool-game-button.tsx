import React from 'react'
import { ButtonInGroup, GroupButton } from '@component/ui'
import { Modal } from '@component/case/modal'
import { useAppSelector } from '@lib/castom-hook/redux'
import { modalAnimationEnum, slogan } from '@/export'
import { PushObject, PushEntity } from '@/component/case/push-to-session'
import { InStoreEntityItem, InStoreObjectItem } from '@component/ui/item/'
import { entityDto, objectDto } from '@/model'
import { useGrid, useToast } from '@/lib/castom-hook'
import { FillHoverHint } from '../master/h-order-component'
import { toggleFullScreen } from '@/lib/function'
import { sessionService } from '@/service/session-service'

interface Props {
}


export const ToolGameButton: React.FC<Props> = ({ }: Props) => {
    const toast = useToast()
    const { session, bestiary, info } = useAppSelector(state => state.session)
    const saveGame = () => {
        localStorage.setItem("game-storage", JSON.stringify(session));
        localStorage.setItem("bestiary-storage", JSON.stringify(bestiary));
        sessionService.saveJSON({
            path: info.session,
            data: session
        }, info.session)

        toast("message", { text: 'Сохранено' });
    }
    const forwardClick = React.useCallback(() => {
        navigator.clipboard.writeText(`${slogan} \n${process.env.CLIENT_HOST}${window.location.pathname.slice(1)}`);
        toast("message", { text: 'Ссылка скопирована' })
    }, [])
    const { swap: swapGrid } = useGrid()

    return (
        <div className='absolute flex z-10 right-35 gap-4'>
            <GroupButton>
                <FillHoverHint title='Режим'>
                    <ButtonInGroup children={<img className='icon-sm' src='/icon/game.svg' />} />
                </FillHoverHint>
                <FillHoverHint title='Карты'>
                    <Modal.Root
                        modal={Modal.MapsGame}
                        animation={modalAnimationEnum['modal-dft']}
                    >
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/map.svg' />} /></Modal.Root>
                </FillHoverHint>
            </GroupButton>
            <GroupButton>
                <FillHoverHint title='Игроки'>
                    <Modal.Root
                        propsModal={{ className: 'justify-end' }}
                        modal={Modal.Users}
                        animation={modalAnimationEnum['modal-right']}
                    >
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/user.svg' />} /></Modal.Root>
                </FillHoverHint>
                <FillHoverHint title='Сетка'>
                    <ButtonInGroup fn={swapGrid} children={<img className='icon-sm' src='/icon/grid.svg' />} />
                </FillHoverHint>
                <FillHoverHint title='Поделиться'>
                    <ButtonInGroup fn={forwardClick} children={<img className='icon-sm' src='/icon/forward.svg' />} />
                </FillHoverHint>
                <FillHoverHint title='Сохранить'>
                    <ButtonInGroup fn={saveGame} children={<img className='icon-sm' src='/icon/save.svg' />} />
                </FillHoverHint>
                <FillHoverHint title='Сущности'>
                    <Modal.Root
                        modal={Modal.PushToSession}
                        animation={modalAnimationEnum['modal-dft']}
                        props={{ type: 'entity', renderItem: (item: entityDto) => <InStoreEntityItem {...item} />, accept: PushEntity }}
                    >
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/dragon.svg' />} /></Modal.Root>
                </FillHoverHint>
                <FillHoverHint title='Объекты'>
                    <Modal.Root
                        modal={Modal.PushToSession}
                        props={{ type: 'object', renderItem: (item: objectDto) => <InStoreObjectItem {...item} />, accept: PushObject }}
                        animation={modalAnimationEnum['modal-dft']}
                    >
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/object.svg' />} /></Modal.Root>
                </FillHoverHint>
                <FillHoverHint title='Изображения'>
                    <Modal.Root
                        modal={Modal.ImgCarousel}
                        animation={modalAnimationEnum['modal-bottom']}
                    >
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/img-carousel.svg' />} /></Modal.Root>
                </FillHoverHint>
                <FillHoverHint title='Заметки'>
                    <Modal.Root
                        modal={Modal.Notes}
                        animation={modalAnimationEnum['modal-dft']}
                    >
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/edit.svg' />} /></Modal.Root>
                </FillHoverHint>
                <FillHoverHint title='Экран'>
                    <ButtonInGroup fn={toggleFullScreen} children={<img className='icon-sm' src='/icon/toggle-full-screen.svg' />} />
                </FillHoverHint>
            </GroupButton>
        </div >
    )
}
