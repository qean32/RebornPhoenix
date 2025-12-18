import React from 'react'
import { ButtonInGroup, GroupButton } from '@component/ui'
import { Modal } from '@component/case/modal'
import { useAppSelector } from '@lib/castom-hook/redux'
import { slogan } from '@/export'
import { PushObject, PushEntity } from '@/component/case/push-to-session'
import { InStoreEntityItem, InStoreObjectItem } from '@component/ui/item/'
import { entityDto, objectDto } from '@/model'
import { useToast } from '@/lib/castom-hook'
import { HoverHint } from '../master/h-order-component'

interface Props {
}


export const ToolGameButton: React.FC<Props> = ({ }: Props) => {
    const toast = useToast()
    const { session, bestiary } = useAppSelector(state => state.session)
    const saveGame = () => {
        localStorage.setItem("game-storage", JSON.stringify(session));
        localStorage.setItem("bestiary-storage", JSON.stringify(bestiary));
        toast("message", { text: 'Сохранено' });
    }
    const forwardClick = React.useCallback(() => {
        navigator.clipboard.writeText(`${slogan} \n${process.env.CLIENT_HOST}${window.location.pathname.slice(1)}`);
        toast("message", { text: 'Ссылка скопирована' })
    }, [])

    return (
        <div className='absolute flex z-10 right-35 gap-4'>
            <GroupButton>
                <LocalHint title='Режим'>
                    <ButtonInGroup children={<img className='icon-sm' src='/icon/game.svg' />} />
                </LocalHint>
                <LocalHint title='Карты'>
                    <Modal.Root modal={Modal.MapsGame}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/map.svg' />} /></Modal.Root>
                </LocalHint>
            </GroupButton>
            <GroupButton>
                <LocalHint title='Состав'>
                    <Modal.Root modal={Modal.Users}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/user.svg' />} /></Modal.Root>
                </LocalHint>
                <LocalHint title='Сетка'>
                    <ButtonInGroup children={<img className='icon-sm' src='/icon/grid.svg' />} />
                </LocalHint>
                <LocalHint title='Поделиться'>
                    <ButtonInGroup fn={forwardClick} children={<img className='icon-sm' src='/icon/forward.svg' />} />
                </LocalHint>
                <LocalHint title='Сохранить'>
                    <ButtonInGroup fn={saveGame} children={<img className='icon-sm' src='/icon/save.svg' />} />
                </LocalHint>
                <LocalHint title='Сущности'>
                    <Modal.Root modal={Modal.PushToSession} props={{ type: 'entity', renderItem: (item: entityDto) => <InStoreEntityItem {...item} />, accept: PushEntity }}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/dragon.svg' />} /></Modal.Root>
                </LocalHint>
                <LocalHint title='Объекты'>
                    <Modal.Root modal={Modal.PushToSession} props={{ type: 'object', renderItem: (item: objectDto) => <InStoreObjectItem {...item} />, accept: PushObject }}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/object.svg' />} /></Modal.Root>
                </LocalHint>
                <LocalHint title='Изображения'>
                    <Modal.Root modal={Modal.ImgCarousel}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/img-carousel.svg' />} /></Modal.Root>
                </LocalHint>
                <LocalHint title='Заметки'>
                    <Modal.Root modal={Modal.Notes}>
                        <ButtonInGroup children={<img className='icon-sm' src='/icon/edit.svg' />} /></Modal.Root>
                </LocalHint>
            </GroupButton>
        </div >
    )
}


type Props_ = {
    children: React.ReactNode
    title: string
}

const LocalHint: React.FC<Props_> = ({
    children,
    title
}: Props_) => {
    return (
        <div className="w-[47px] h-[47px] relative">
            <HoverHint
                text={title}
                fit
                x='center-x'
                y='bottom'
            >
                {children}
            </HoverHint>
        </div>
    )
}