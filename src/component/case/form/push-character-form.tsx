import React from 'react'
import { Title, TextInput, ImgInput } from '@component/ui'
import { pushCharacterDto, pushCharacterSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm, useTmpObject, useToast } from '@/lib/castom-hook'
import { profileService } from '@/service'
import { REJECT_SERVER } from '@/export'
import { fromDataToFormData } from '@/lib/function'

interface Props {
    children: React.ReactNode
    swap: Function
}

const ACCEESS_ACTION = 'Персонаж создан'
export const PushCharaterForm: React.FC<Props> = ({ children, swap }: Props) => {
    const toast = useToast()
    const { setTmp } = useTmpObject()

    const { form, submitHandler } =
        useMyForm<pushCharacterDto>(
            pushCharacterSchema,
            (data: pushCharacterDto) => {
                swap()
                profileService.CREATE_CHARACTER(fromDataToFormData(data))
                    .then(({ status, data }) => {
                        if (status == 201) {
                            toast('message', { text: ACCEESS_ACTION })
                            setTmp({ payload: data, key: 'create-character' })
                        }
                    })
                    .catch(() => toast('message', { text: REJECT_SERVER }))
            },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form action="" onSubmit={submitHandler} className='flex flex-col h-full gap-4'>
                <Title className='mb-1'>ДОБАВЛЕНИЕ ИГРЫ</Title>
                <TextInput placeHolder='Имя' name='name' />
                <TextInput placeHolder='Инициатива' name='initiative' />
                <ImgInput name='img' title='Изображение' />
                <div className="flex flex-1 gap-4 justify-end items-end">
                    {children}
                </div>
            </form>
        </FormProvider>
    )
}
