import { Button, TextArea, TextInput, UploadImgArea } from '@/component/ui'
import { TypeUseBoolen, useMyForm } from '@/lib/castom-hook'
import { initPushDataToSession } from '@/lib/function'
import { pushEntityToSessionFormDto, pushEntityToSessionSchema } from '@/model/schema'
import React from 'react'
import { FormProvider } from 'react-hook-form'

interface Props {
    switcher: TypeUseBoolen
    swap: React.MouseEventHandler<HTMLButtonElement>
}


export const PushFromForm: React.FC<Props> = ({ swap, switcher }: Props) => {
    const push = initPushDataToSession('entity')
    const pushHandler = (data: any) => {
        push(data);
        // @ts-ignore
        swap();
    }

    const { form, submitHandler } =
        useMyForm<pushEntityToSessionFormDto>(
            pushEntityToSessionSchema,
            (data: any) => { pushHandler(data) },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form className="w-1/2 flex-1 flex flex-col" onSubmit={submitHandler}>
                <div className="flex-1 pt-15">
                    <div className="h-[180px] flex justify-center items-start">
                        <UploadImgArea
                            name='path'
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
                        <Button variant='ghost' fn={switcher.on}>
                            <p className='pointer-events-none'>Назад</p></Button>
                    </div>
                    <Button
                        variant='acceess'
                        type='submit'
                        className='mt-2 w-11/12'
                    >
                        <p>Добавить</p></Button>
                </div>
            </form>
        </FormProvider>
    )
}
