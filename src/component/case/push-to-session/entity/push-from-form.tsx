import { Button, TextArea, TextInput, UploadImgArea } from '@/component/ui'
import { dftSource, REJECT_SERVER } from '@/export'
import { TypeUseBoolen, useMyForm, useToast } from '@/lib/castom-hook'
import { useAppDispatch } from '@/lib/castom-hook/redux'
import { fromDataToFormData, initPushDataToSession } from '@/lib/function'
import { pushEntityToSessionFormDto, pushEntityToSessionSchema } from '@/model/schema'
import { sessionService } from '@/service/session-service'
import { swapTmpObject } from '@/store/tmp-object'
import React from 'react'
import { FormProvider } from 'react-hook-form'

interface Props {
    switcher: TypeUseBoolen
    swap: React.MouseEventHandler<HTMLButtonElement>
}


export const PushFromForm: React.FC<Props> = ({ swap, switcher }: Props) => {
    const push = initPushDataToSession('entity')
    const toast = useToast()
    const dispath = useAppDispatch()

    const pushHandler = (data: any) => {
        push(data);
        // @ts-ignore
        swap();
    }

    const { form, submitHandler } =
        useMyForm<pushEntityToSessionFormDto>(
            pushEntityToSessionSchema,
            (data: pushEntityToSessionFormDto) => {
                sessionService.createEntity(fromDataToFormData(data))
                    .then(({ data, status }) => {
                        if (status == 201) {
                            toast('push-entity', { text: data.name })
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
                <div className="flex-1 pt-15">
                    <div className="h-[180px] flex justify-center items-start">
                        <UploadImgArea
                            name='img'
                            className='w-full flex justify-center'
                            iconSize='icon-lg'
                            labelClass='p-0 w-1/2 aspect-square overflow-hidden rounded-full outline-bg-light cursor-pointer bg-color-dark'
                        />
                    </div>
                    <div className='px-5'>
                        <TextInput
                            placeHolder='Название'
                            className='my-5'
                            name='name'
                            xHint='left'
                            yHint='bottom'
                        />

                        <div className="flex justify-between text-sm">
                            <p>Инициатива</p>
                            <TextInput
                                className='w-[60px]'
                                placeHolder=''
                                name='initiative'
                            />
                        </div>
                        <TextArea title='Описание' className='h-[160px] overflow-scroll bg-color-dark p-4 py-2 my-2 mb-4' name="description" />
                    </div>
                </div>
                <div className="flex justify-end flex-col pb-6 pr-4 items-end">
                    <div className="flex gap-2 pb-1">
                        <Button fn={swap} variant='ghost'><p>Отмена</p></Button>
                        <Button fn={switcher.on} variant='ghost'>
                            <p className='pointer-events-none'>Назад</p></Button>
                    </div>
                    <Button
                        variant='acceess'
                        type='submit'
                        className='mt-3 w-11/12'
                    ><p>Добавить</p></Button>
                </div>
            </form>
        </FormProvider>
    )
}
