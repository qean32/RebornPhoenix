import { Button, DisabledInput, NoFindData } from '@/component/ui'
import { TypeUseBoolen, useTmpObject } from '@/lib/hook'
import { initPushDataToSession } from '@/lib/function'
import React from 'react'
import { voidFunction } from '@/model'

interface Props {
    switcher: TypeUseBoolen
    swap: voidFunction
}


export const PushFromJSON: React.FC<Props> = ({ switcher, swap }: Props) => {
    const { tmpObject, key } = useTmpObject()
    const push = initPushDataToSession('entity')

    const pushHandler = () => {
        swap()
        // @ts-ignore
        push(tmpObject)
    }

    React.useEffect(() => {
        if (tmpObject) {
            switcher.on()
        }
    }, [tmpObject])

    return (
        <div className="w-1/2 flex-1 flex flex-col">
            <div className="flex-1 pt-15">
                {key == 'push-object-to-session' && tmpObject?.isEntity &&
                    <>
                        <div className="h-[180px] flex justify-center items-start">
                            <div className="w-1/2 aspect-square bg-img rounded-full outline-bg-light" style={{ backgroundImage: `url(${tmpObject.path})` }}></div>
                        </div>
                        <div className='px-5'>
                            {/* @ts-ignore */}
                            <DisabledInput value={tmpObject.name} className='my-5' />
                            <div className="flex justify-between text-sm">
                                <p>Инициатива</p>
                                {/* @ts-ignore */}
                                <DisabledInput value={tmpObject.initiative} className='w-[60px]' />
                            </div>
                            <div className="h-[160px] overflow-scroll rounded-sm bg-color-dark p-4 py-2 my-2 mb-4">
                                {tmpObject?.description}
                            </div>
                        </div>
                    </>
                }
                {!tmpObject?.isEntity && <NoFindData title='Токен не выбран' className='h-full' />}
            </div>
            <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                <div className="flex gap-2 pb-1" data={JSON.stringify({ ...tmpObject })}>
                    <Button onClick={swap} variant='ghost'><p>Отмена</p></Button>
                    <Button variant='ghost' onClick={switcher.off}>
                        <p className='pointer-events-none'>Кастомный объект</p></Button>
                </div>
                <Button
                    variant='acceess'
                    type='submit'
                    onClick={pushHandler}
                    className='mt-2 w-11/12'
                >
                    <p>Добавить</p></Button>
            </div>
        </div>
    )
}
