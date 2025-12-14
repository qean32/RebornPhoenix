import React from 'react'
import { cn, getHTMLData, stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { Ava, Button, ModalCross, Title } from '@component/ui'
import { useAppDispatch, useAppSelector } from '@/lib/castom-hook/redux'
import { statusDto } from '@/model'
import { changeEntity } from '@/store/session-store'

interface Props {
    view: boolean | string
    swap: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}

const actionMap: { status: statusDto, icon: any }[] = [
    {
        icon: <img src={'/icon/dead.svg'} alt="" className='icon-lg' />,
        status: 'dead'
    },
    {
        icon: <img src={'/icon/hidden.svg'} alt="" width={40} />,
        status: 'hidden'
    },
    {
        icon: <img src={'/icon/stable.svg'} alt="" className='icon-md-' />,
        status: 'stable'
    },
    {
        icon: <img src={'/icon/dead.svg'} alt="" className='icon-lg' />,
        status: 'stan'
    },
]

const sizeMap: { id: number, text: string }[] = [
    {
        id: 1,
        text: 'sm'
    },
    {
        id: 2,
        text: 'md'
    },
    {
        id: 3,
        text: 'lg'
    },
    {
        id: 4,
        text: 'xl'
    },
]


export const ActionEntity: React.FC<Props> = ({
    view,
    swap,
}: Props) => {
    const { session: { mapsData, currentMap } } = useAppSelector(state => state.session)
    const entity = mapsData[currentMap?.id ?? 'null']?.queue.find(item => item.id == Number(view))
    const dispath = useAppDispatch()
    const change = (e: React.MouseEvent<HTMLDivElement>) => {
        const { key, value } = getHTMLData(e, true)

        if (entity) {
            dispath(changeEntity({ payload: { id: entity?.id, [key]: value } }))
        }
    }


    return (
        <Modal
            swap={swap}
            view={!!view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="bg-color w-4/12 h-5/12 pt-5 -translate-y-1/7 rounded-md flex flex-col overflow-hidden relative" onClick={stopPropagation}>
                <ModalCross fn={swap} />
                <Title className='p-2 pl-10 uppercase letter-spacing-2px'>Редактор токена</Title>
                <div className="p-5 px-10 flex">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5" onClick={change}>
                            <p className='pb-4'>Статус</p>
                            {actionMap.map(item => {
                                return <Square
                                    key={item.status}
                                    value={entity?.status == item.status}
                                    data={{ key: 'status', value: item.status }}
                                >
                                    {item.icon}
                                </Square>
                            })}
                        </div>
                        <div className="flex gap-5" onClick={change}>
                            <p className='pb-4'>Размер</p>
                            {sizeMap.map(item => {
                                return <Square
                                    key={item.id}
                                    value={entity?.size == item.id}
                                    data={{ key: 'size', value: item.id }}
                                >
                                    <p className='text-2xl'>
                                        {item.text}
                                    </p>
                                </Square>
                            })}
                        </div>
                    </div>
                    <div className="w-full flex justify-start items-center flex-col gap-5 pl-5">
                        <Ava path={entity?.path ?? ''} size='ava-xl' className='-translate-y-0.5' />
                        <p>{entity?.name}</p>
                    </div>
                </div>
                <div className="flex gap-5 justify-end p-5 items-end h-full">
                    <Button variant='ghost' fn={swap}><p>Отмена</p></Button>
                    <Button variant='acceess' fn={swap}><p>Сохранить</p></Button>
                </div>
            </div>
        </Modal>
    )
}


interface Props_ {
    children: React.ReactNode,
    value: boolean
    data: { key: string, value: string | number }
}

const Square: React.FC<Props_> = ({ children, data, value }: Props_) => {
    return (
        <div
            data={JSON.stringify(data)}
            className={cn(
                'w-[70px] rounded-sm aspect-square bg-color-dark hover:-translate-y-1 transition-300 cursor-pointer flex justify-center items-center child-no-fill-event',
                (value && 'outline-bg-light')
            )}
        >
            {children}</div>
    )
}