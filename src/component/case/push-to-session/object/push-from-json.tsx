import { Button, DisabledInput, NoFindData } from '@/component/ui'
import { TypeUseBoolen } from '@/lib/hook'
import { useAppSelector } from '@/lib/hook/redux'
import { initPushDataToSession } from '@/lib/function'
import React from 'react'

interface Props {
    switcher: TypeUseBoolen
    swap: React.MouseEventHandler<HTMLButtonElement>
}


export const PushFromJSON: React.FC<Props> = ({ switcher, swap }: Props) => {
    const { object: data } = useAppSelector(state => state.pushedObject)
    const push = initPushDataToSession('object')

    const pushHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        // @ts-ignore
        push(data);
        swap(e);
    }

    React.useEffect(() => {
        if (data) {
            switcher.on()
        }
    }, [data])
    const object = data?.isObject ? data : { path: '', name: '', id: 0, size: { x: 0, y: 0 } }

    return (
        <div className="w-1/2 flex-1 flex flex-col">
            <div className="flex-1 px-6">
                {data?.isObject
                    &&
                    <>
                        <div className="h-[300px] flex justify-center items-center pt-20">
                            <div className="w-[99%] aspect-square bg-img rounded-sm" style={{ backgroundImage: `url(${object.path})` }}></div>
                        </div>
                        <div className='pt-15'>
                            <DisabledInput value={object.name} />
                        </div>
                    </>
                }
                <NoFindData title='токен не выбран' className='h-full' view={!data?.isObject} />
            </div>
            <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                <div className="flex gap-2 pb-1">
                    <Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                    <Button variant='ghost' fn={switcher.off}>
                        <p className='pointer-events-none'>Кастомный объект</p></Button>
                </div>
                <Button variant='acceess' type='submit' fn={pushHandler} className='mt-2 w-11/12'><p>Добавить</p></Button>
            </div>
        </div>
    )
}
