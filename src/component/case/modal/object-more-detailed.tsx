import React from 'react'
import { stopPropagation } from '@/lib/function'
import { Modal } from '@component/master/h-order-component'
import { useAppSelector } from '@/lib/hook/redux'
import { Initiative, NoFindData } from '@/component/ui'
import { EditBestiaryForm } from '../form'
import { useQ, useTmpObject } from '@/lib/hook'
import { qpk } from '@/export'

interface Props {
}


export const ObjectMoreDetailed: React.FC<Props> = ({ }: Props) => {
    const { bestiary, session } = useAppSelector(state => state.session)
    const { pushQ } = useQ(qpk.viewimg)
    const { key, clearTmp, tmpObject } = useTmpObject()
    if (session?.currentMap) {
        const viewImg = (path: string) => {
            pushQ(path)
        }

        const object =
            key == 'more-entity' ?
                bestiary.find(item => item.idInBestiary == tmpObject?.id)
                :
                key == 'more-character' ?
                    session.mapsData[session.currentMap.id ?? "null"].characters.find(item => item.id == tmpObject?.id)
                    :
                    session.mapsData[session.currentMap.id ?? "null"].objects.find(item => item.id == tmpObject?.id)

        return (
            <Modal
                swap={clearTmp}
                view={Boolean(tmpObject?.id) ?? false}
                className='justify-end h-full'
                animation={{
                    open: 'right-modal-open',
                    close: 'right-modal-close'
                }}
            >
                {object ?
                    <>
                        {key == 'more-entity' &&
                            <>
                                {false ?
                                    // @ts-ignore
                                    <EditBestiaryForm entity={object} swap={clearTmp} />
                                    :
                                    <div onClick={stopPropagation} className='bg-color h-full w-[340px] cursor-pointer flex items-center justify-start pt-3 flex-col'>
                                        <div className="w-11/12 bg-color-dark aspect-square rounded-sm bg-img"
                                            style={{ backgroundImage: `url(${object?.path ?? ''})` }}
                                            onClick={() => viewImg(object?.path ?? '')}
                                        >
                                        </div>
                                        <div className="w-11/12 rounded-sm pt-4">
                                            <p className='text-2xl'>{object?.name ?? ''}</p>
                                            <div className="h-[300px] overflow-scroll rounded-sm bg-color-dark p-4 py-2 my-2 mb-4">
                                                {/* @ts-ignore */}
                                                {object?.description}
                                            </div>
                                            {/* @ts-ignore */}
                                            <Initiative title={object?.initiative ?? 0} />
                                        </div>
                                    </div>
                                }
                            </>
                        }
                        {key == 'more-character' &&
                            <>
                                <div onClick={stopPropagation} className='bg-color h-full w-[340px] flex items-center justify-start pt-3 flex-col'>
                                    <div className="w-11/12 bg-color-dark aspect-square rounded-sm bg-img" style={{ backgroundImage: `url(${object?.path ?? ''})` }} ></div>
                                    <div className="w-11/12 rounded-sm pt-4">
                                        <p className='text-2xl'>{object?.name ?? ''}</p>
                                        <div className="h-[300px] overflow-scroll rounded-sm bg-color-dark p-4 py-2 my-2 mb-4">
                                            {/* @ts-ignore */}
                                            {object?.description}
                                        </div>
                                        {/* @ts-ignore */}
                                        <Initiative title={object?.initiative ?? 0} />
                                    </div>
                                </div>
                            </>
                        }
                        {key == 'more-object' &&
                            <>
                                <div onClick={stopPropagation} className='bg-color h-full w-[340px] flex items-center justify-start pt-3 flex-col'>
                                    <div className="w-11/12 bg-color-dark aspect-square rounded-sm bg-img" style={{ backgroundImage: `url(${object?.path ?? ''})` }} ></div>
                                    <div className="w-11/12 rounded-sm pt-4">
                                        <p className='text-2xl'>{object?.name ?? ''}</p>
                                        <div className="h-[300px] overflow-scroll rounded-sm bg-color-dark p-4 py-2 my-2 mb-4">
                                            {/* @ts-ignore */}
                                            {object?.description}
                                        </div>
                                        {/* @ts-ignore */}
                                        <Initiative title={object?.initiative ?? 0} />
                                    </div>
                                </div>
                            </>
                        }
                    </>
                    :
                    <div onClick={stopPropagation} className='bg-color h-full w-[340px] flex'><NoFindData title='Сущность не найдена' view /></div>
                }
            </Modal >
        )
    }
}