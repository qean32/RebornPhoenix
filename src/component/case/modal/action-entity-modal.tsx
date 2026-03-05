import React from 'react'
import { cn, getHTMLData, stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { Ava, ModalCross, Title } from '@component/ui'
import { useAppDispatch, useAppSelector } from '@/lib/hook/redux'
import { statusType } from '@/model'
import { changeEntity } from '@/store/session'
import { EventMiddleware } from '@/lib/middleware'
import { useEntityActionThrow } from '@/lib/hook/throw'

interface Props {
}

const actionMap: { status: statusType, icon: any }[] = [
    {
        icon: <img src={'/icon/stable.svg'} alt="" className='icon-md-' />,
        status: 'stable'
    },
    {
        icon: <img src={'/icon/hidden.svg'} alt="" width={40} />,
        status: 'hidden'
    },
    {
        icon: <img src={'/icon/dead.svg'} alt="" className='icon-lg' />,
        status: 'dead'
    },
]

const sizeMap: { id: number, text: string }[] = [
    {
        id: 1,
        text: '1'
    },
    {
        id: 2,
        text: '2'
    },
    {
        id: 3,
        text: '3'
    },
    {
        id: 4,
        text: '4'
    },
    {
        id: 5,
        text: '5'
    },
    {
        id: 6,
        text: '6'
    },
    {
        id: 7,
        text: '7'
    },
    {
        id: 8,
        text: '8'
    },
    {
        id: 9,
        text: '9'
    },
]


export const ActionEntity: React.FC<Props> = ({ }: Props) => {
    const { session: { mapsData, currentMap } } = useAppSelector(state => state.session)
    const [view, swap] = useEntityActionThrow()
    const entity = currentMap ? mapsData[currentMap?.id ?? 'null']?.queue.find(item => item.id == Number(view)) : null
    const dispath = useAppDispatch()
    const event = EventMiddleware()
    const changeHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const { key, value } = getHTMLData(e, true)
        event(
            { payload: { [key]: value, id: entity?.id }, type: 'change-entity' }, () => {
                if (entity) {
                    dispath(changeEntity({ payload: { id: entity?.id, [key]: value } }))
                }
            })
    }


    return (
        <Modal
            swap={() => swap(0)}
            view={!!view}
            animation={{
                open: 'modal-open',
                close: 'modal-close'
            }}
        >
            <div className="bg-color w-4/12 h-5/12 pt-5 -translate-y-1/7 rounded-md flex flex-col overflow-hidden relative" onClick={stopPropagation}>
                <ModalCross onClick={() => swap(0)} />
                <Title className='p-2 pl-10 uppercase letter-spacing-2px'>Редактор токена</Title>
                <div className="p-5 px-10 flex">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-4" onClick={changeHandler}>
                            <p className='pb-4'>Статус</p>
                            {actionMap.map(item => {
                                return <Square
                                    value={entity?.status == item.status}
                                    key={item.status}
                                    data={{ key: 'status', value: item.status }}
                                >
                                    {item.icon}
                                </Square>
                            })}
                        </div>
                        <div className="flex gap-4 flex-wrap" onClick={changeHandler}>
                            <p className='pb-4'>Размер</p>
                            {sizeMap.map(item => {
                                return <Square
                                    value={entity?.size == item.id}
                                    key={item.id}
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
                        <Ava path={entity?.path ?? ''} size='ava-2xl' className='-translate-y-0.5' blob />
                        <p className='text-2xl'>{entity?.name}</p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}


interface PropsSquare {
    children: React.ReactNode,
    value: boolean
    data: { key: string, value: string | number }
}

const Square: React.FC<PropsSquare> = ({ children, data, value }: PropsSquare) => {
    return (
        <div
            data={JSON.stringify(data)}
            className={cn(
                'w-[50px] rounded-sm aspect-square bg-color-dark hover:-translate-y-1 transition-300 cursor-pointer flex justify-center items-center child-no-fill-event',
                (value && 'outline-bg-light')
            )}
        >
            {children}</div>
    )
}