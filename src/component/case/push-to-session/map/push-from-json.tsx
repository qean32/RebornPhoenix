import { Button, DisabledInput, NoFindData } from '@/component/ui'
import { TypeUseBoolen } from '@/lib/castom-hook'
import { useAppSelector } from '@/lib/castom-hook/redux'
import { initPushDataToSession } from '@/lib/function'
import React from 'react'

interface Props {
    switcher: TypeUseBoolen
    swap: React.MouseEventHandler<HTMLButtonElement>
}


export const PushFromJSON: React.FC<Props> = ({ switcher, swap }: Props) => {
    const { object: data } = useAppSelector(state => state.pushedObject)
    const push = initPushDataToSession('map')

    const pushHandler = () => {
        // @ts-ignore
        swap()
        // @ts-ignore
        push(data)
    }

    React.useEffect(() => {
        if (data) {
            switcher.on()
        }
    }, [data])
    const map = data?.isMap ? data : { path: '', name: '', id: 0, size: { x: 0, y: 0 } }

    return (
        <div className="w-1/2 flex-1 flex flex-col">
            <div className="flex-1">
                {data?.isMap
                    &&
                    <>
                        <div className="p-5 h-[220px] w-full mt-5">
                            <div className="h-full rounded-lg cursor-pointer bg-img bg-color-dark"
                                style={{ backgroundImage: `url(${map.path})` }}></div>
                        </div>

                        <div className="px-5">
                            <DisabledInput value={map.name} />
                        </div>
                    </>
                }
                <NoFindData title='карта не выбрана' className='h-full' view={!data?.isMap} />
            </div>
            <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                <div className="flex gap-2" data={JSON.stringify(data)}>
                    <Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                    <Button fn={switcher.off} variant='ghost'>
                        <p className='pointer-events-none'>Кастомная карта</p></Button>
                </div>
                <Button type='submit' variant='acceess' fn={pushHandler} className='mt-3 w-11/12'><p>Добавить</p></Button>
            </div>
        </div>
    )
}
