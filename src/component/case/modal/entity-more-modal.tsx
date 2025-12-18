import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { useAppSelector } from '@/lib/castom-hook/redux'
import { Initiative, NoFindData } from '@/component/ui'
import { EditBestiaryForm } from '../form'

interface Props {
    view: boolean
    swap: React.MouseEventHandler<HTMLDivElement>
}


export const EntityMore: React.FC<Props> = ({ view, swap }: Props) => {
    const { bestiary } = useAppSelector(state => state.session)
    const entity = bestiary.find(item => item.idInBestiary == Number(view))


    return (
        <Modal
            swap={swap}
            view={view}
            className='justify-end h-full'
            animation={{
                open: 'right-modal-open',
                close: 'right-modal-close'
            }}
        >
            {entity ?
                <>
                    {true ?
                        <EditBestiaryForm entity={entity} />
                        :
                        <div onClick={stopPropagation} className='bg-color h-full w-[340px] flex items-center justify-start pt-3 flex-col'>
                            <div className="w-11/12 bg-color-dark aspect-square rounded-sm bg-img" style={{ backgroundImage: `url(${entity?.path ?? ''})` }} ></div>
                            <div className="w-11/12 rounded-sm pt-4">
                                <p className='text-2xl'>{entity?.name ?? ''}</p>
                                <div className="h-[300px] overflow-scroll rounded-sm bg-color-dark p-4 py-2 my-2 mb-4">
                                    {entity?.description}
                                </div>
                                <Initiative title={entity?.initiative ?? 0} />
                            </div>
                        </div>
                    }
                </>
                :
                <div onClick={stopPropagation} className='bg-color h-full w-[340px] flex'><NoFindData title='Сущность не найдена' view /></div>
            }
        </Modal >
    )
}
