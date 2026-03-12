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
    const push = initPushDataToSession('object')

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
            <div className="flex-1 px-6">
                {tmpObject?.isObject && key == 'push-object-to-session'
                    &&
                    <>
                        <div className="h-[300px] flex justify-center items-center pt-20">
                            <div className="w-[99%] aspect-square bg-img rounded-sm" style={{ backgroundImage: `url(${tmpObject.path})` }}></div>
                        </div>
                        <div className='pt-15'>
                            {/* @ts-ignore */}
                            <DisabledInput value={tmpObject.name} />
                        </div>
                    </>
                }
                {!tmpObject?.isObject && <NoFindData title='Обьект не выбран' className='h-full' />}
            </div>
            <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                <div className="flex gap-2 pb-1">
                    <Button onClick={swap} variant='ghost'><p>Отмена</p></Button>
                    <Button variant='ghost' onClick={switcher.off}>
                        <p className='pointer-events-none'>Кастомный объект</p></Button>
                </div>
                <Button variant='acceess' type='submit' onClick={pushHandler} className='mt-2 w-11/12'><p>Добавить</p></Button>
            </div>
        </div>
    )
}
