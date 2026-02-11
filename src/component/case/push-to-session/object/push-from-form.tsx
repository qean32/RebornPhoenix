import { Button, TextInput, UploadImgArea } from '@/component/ui'
import { dftSource, REJECT_SERVER } from '@/export'
import { TypeUseBoolen, useMyForm, useToast } from '@/lib/hook'
import { conventToFormData, initPushDataToSession } from '@/lib/function'
import { pushObjectToSessionFormSchema, pushObjectToSessionSchema } from '@/model/schema'
import { sessionService } from '@/service/session-service'
import { useAppDispatch } from '@/store'
import { swapTmpObject } from '@/store/tmp-object-store'
import React from 'react'
import { FormProvider } from 'react-hook-form'

interface Props {
    switcher: TypeUseBoolen
    swap: React.MouseEventHandler<HTMLButtonElement>
}


export const PushFromForm: React.FC<Props> = ({ swap, switcher }: Props) => {
    const push = initPushDataToSession('object')
    const toast = useToast()
    const dispath = useAppDispatch()

    const pushHandler = (data: any) => {
        push(data);
        // @ts-ignore
        swap();
    }

    const { form, submitHandler } =
        useMyForm<pushObjectToSessionFormSchema>(
            pushObjectToSessionSchema,
            (data: pushObjectToSessionFormSchema) => {
                sessionService.CREATE_OBJECT(conventToFormData(data))
                    .then(({ data, status }) => {
                        if (status == 201) {
                            toast('push-entity', { name: data.name })
                            dispath(swapTmpObject(
                                {
                                    key: 'push-entity',
                                    payload: { ...data, source: dftSource }
                                }))
                            pushHandler(data);
                        }
                    })
                    .catch(() => toast('message', { text: REJECT_SERVER }))
            },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form className="w-1/2 flex-1 flex flex-col" onSubmit={submitHandler}>
                <div className="flex-1 px-5">
                    <div className="h-[300px] flex justify-center items-center pt-20">
                        <UploadImgArea
                            name='img'
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
                    <Button variant='acceess' type='submit' className='mt-3 w-11/12'><p>Добавить</p></Button>
                </div>
            </form>
        </FormProvider>
    )
}
