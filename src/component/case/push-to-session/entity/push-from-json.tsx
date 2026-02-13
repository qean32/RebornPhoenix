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
    const push = initPushDataToSession('entity')

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
    const entity = data?.isEntity ? data : { path: '', name: '', id: 0, description: '', initiative: 0 }

    return (
        <div className="w-1/2 flex-1 flex flex-col">
            <div className="flex-1 pt-15">
                {data?.isEntity
                    &&
                    <>
                        <div className="h-[180px] flex justify-center items-start">
                            <div className="w-1/2 aspect-square bg-img rounded-full outline-bg-light" style={{ backgroundImage: `url(${entity.path})` }}></div>
                        </div>
                        <div className='px-5'>
                            <DisabledInput value={entity.name} className='my-5' />
                            <div className="flex justify-between text-sm">
                                <p>Инициатива</p>
                                {/* @ts-ignore */}
                                <DisabledInput value={entity.initiative} className='w-[60px]' />
                            </div>
                            <div className="h-[160px] overflow-scroll rounded-sm bg-color-dark p-4 py-2 my-2 mb-4">
                                {/* @ts-ignore */}
                                {entity?.description}
                            </div>
                        </div>
                    </>
                }
                <NoFindData title='токен не выбран' className='h-full' view={!data?.isEntity} />
            </div>
            <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                <div className="flex gap-2 pb-1" data={JSON.stringify({ ...data })}>
                    <Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                    <Button variant='ghost' fn={switcher.off}>
                        <p className='pointer-events-none'>Кастомный объект</p></Button>
                </div>
                <Button
                    variant='acceess'
                    type='submit'
                    fn={pushHandler}
                    className='mt-2 w-11/12'
                >
                    <p>Добавить</p></Button>
            </div>
        </div>
    )
}
