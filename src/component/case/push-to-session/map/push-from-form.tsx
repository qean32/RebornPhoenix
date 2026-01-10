import { UploadImgArea, Button, TextInput } from '@/component/ui'
import { TypeUseBoolen, useMyForm, useToast } from '@/lib/castom-hook'
import { initPushDataToSession } from '@/lib/function'
import { pushMapToSessionFormDto, pushMapToSessionSchema } from '@/model/schema'
import { sessionService } from '@/service/session-service'
import React from 'react'
import { FormProvider } from 'react-hook-form'

interface Props {
    switcher: TypeUseBoolen
    swap: React.MouseEventHandler<HTMLButtonElement>
}


export const PushFromForm: React.FC<Props> = ({ swap, switcher }: Props) => {
    const toast = useToast()
    const push = initPushDataToSession('map')
    const pushHandler = (data: any) => {
        push(data);
        // @ts-ignore
        swap();
    }
    const { form, submitHandler } =
        useMyForm<pushMapToSessionFormDto>(
            pushMapToSessionSchema,
            (data: pushMapToSessionFormDto) => {
                sessionService.createMap(data)
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
                <div className="flex-1">
                    <UploadImgArea
                        labelClass='h-full rounded-lg cursor-pointer bg-img bg-color-dark block'
                        className='p-5 h-[220px] w-full mt-5'
                        name='path'
                    />

                    <div className="px-5">
                        <TextInput placeHolder='Название' name='name' />
                    </div>
                </div>
                <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                    <div className="flex gap-2">
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
