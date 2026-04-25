import { Button, DisabledInput, NoFindData } from '@/component/ui'
import { TypeUseBoolen, useTmpObject } from '@/lib/hook'
import { initPushDataToSession } from '@/lib/function'
import React from 'react'
import { useViewImgThrow } from '@/lib/hook/throw'
import { voidFunction } from '@/model'

interface Props {
    switcher: TypeUseBoolen
    swap: voidFunction
}


export const PushFromJSON: React.FC<Props> = ({ switcher, swap }: Props) => {
    const { tmpObject, key } = useTmpObject()
    const push = initPushDataToSession('map')
    const [_, swapViewImg] = useViewImgThrow()

    const clickImgHandler = () => {
        if (tmpObject?.path) {
            swapViewImg(tmpObject.path)
        }
    }

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
            <div className="flex-1">
                {key == 'push-object-to-session' && tmpObject?.isMap &&
                    <>
                        <div className="p-5 h-[220px] w-full mt-5" onClick={clickImgHandler}>
                            <div className="h-full rounded-lg cursor-pointer bg-img bg-color-dark"
                                style={{ backgroundImage: `url(${tmpObject.path})` }}></div>
                        </div>

                        <div className="px-5">
                            {/* @ts-ignore */}
                            <DisabledInput value={tmpObject.name} />
                        </div>
                    </>
                }
                {!tmpObject?.isMap && <NoFindData title='Карта не выбрана' className='h-full' />}
            </div>
            <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                <div className="flex gap-2" data={JSON.stringify(tmpObject)}>
                    <Button onClick={swap} variant='ghost'><p>Отмена</p></Button>
                    <Button onClick={switcher.off} variant='ghost'>
                        <p className='pointer-events-none'>Кастомная карта</p></Button>
                </div>
                <Button variant='acceess' onClick={pushHandler} className='mt-3 w-11/12'><p>Добавить</p></Button>
            </div>
        </div>
    )
}
