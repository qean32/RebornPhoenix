import { Button, TextInput, UploadImgArea } from '@/component/ui'
import { TypeUseBoolen, useMyForm, useToast } from '@/lib/castom-hook'
import { initPushDataToSession } from '@/lib/function'
import { pushObjectToSessionFormDto, pushObjectToSessionSchema } from '@/model/schema'
import { sessionService } from '@/service/session-service'
import React from 'react'
import { FormProvider } from 'react-hook-form'

interface Props {
    switcher: TypeUseBoolen
    swap: React.MouseEventHandler<HTMLButtonElement>
}


export const PushFromForm: React.FC<Props> = ({ swap, switcher }: Props) => {
    const push = initPushDataToSession('object')
    const toast = useToast()
    const pushHandler = (data: any) => {
        push(data);
        // @ts-ignore
        swap();
    }
    const { form, submitHandler } =
        useMyForm<pushObjectToSessionFormDto>(
            pushObjectToSessionSchema,
            (data: pushObjectToSessionFormDto) => {
                sessionService.createObject(data)
                    .then(data => {
                        pushHandler(data);
                        toast('push-entity', { text: data.name })
                    })
                    .catch(error => toast(error))
            },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form className="w-1/2 flex-1 flex flex-col" onSubmit={submitHandler}>
                <div className="flex-1 px-5">
                    <div className="h-[300px] flex justify-center items-center pt-20">
                        <UploadImgArea
                            name='path'
                            className='w-[99%] aspect-square p-0'
                            iconSize='icon-lg'
                            labelClass='flex p-0 w-full overflow-hidden aspect-square rounded-md cursor-pointer justify-center items-center bg-img bg-transparent' />
                    </div>
                    <div className='pt-15'>
                        <TextInput placeHolder='Название' name='name' />
                    </div>
                </div>
                <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                    <div className="flex gap-2 pb-1">
                        <Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                        <Button fn={switcher.on} variant='ghost'>
                            <p className='pointer-events-none'>Назад</p></Button>
                    </div>
                    <Button variant='acceess' fn={switcher.on} className='mt-3 w-11/12'><p>Добавить</p></Button>
                </div>
            </form>
        </FormProvider>
    )
}
