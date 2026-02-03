import { Button, DatePickerInForm, TextArea, TextInput } from '@/component/ui'
import { REJECT_SERVER } from '@/export'
import { useMyForm, useToast } from '@/lib/castom-hook'
import { stopPropagation } from '@/lib/function'
import { banFormDto, banSchema } from '@/model/schema'
import { profileService } from '@/service'
import React from 'react'
import { FormProvider } from 'react-hook-form'
import { useParams } from 'react-router-dom'

interface Props {
    id: string
    swap: Function
}


const ACCEESS_ACTION = 'Пользовтель забанен'
export const BanForm: React.FC<Props> = ({ id, swap }: Props) => {
    const { id: idUser } = useParams()
    const toast = useToast()
    const { form, submitHandler } = useMyForm<banFormDto>(banSchema,
        (data: banFormDto) => {
            profileService.BAN_ACTION(data, idUser ?? 0)
                .then(() => toast('message', { text: ACCEESS_ACTION }))
                .catch(() => toast('message', { text: REJECT_SERVER }))
                .finally(() => {
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000)
                })
            swap()
        },
        () => { },
    )


    return (

        <FormProvider {...form}>

            <form
                className='bg-color h-full flex pt-3 flex-col flex-1'
                onClick={stopPropagation}
                onSubmit={submitHandler}
            >
                <TextInput name='id' defaultValue={id?.toString()} placeHolder='' className='d-none' />
                <div className="px-5 flex flex-col gap-5 flex-1">
                    <DatePickerInForm title='Дата завершения блокировки' />
                    <TextArea name='reason' title='Причина блокировки' className='p-3' />
                    <div className="flex flex-1 items-end gap-3 justify-end pb-5">
                        <Button variant='acceess' >Отмена</Button>
                        <Button variant='reject' type='submit' >Выдать блокировку</Button>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
