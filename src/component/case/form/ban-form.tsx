import { Button, DatePickerInForm, TextArea, TextInput } from '@/component/ui'
import { useMyForm } from '@/lib/castom-hook'
import { stopPropagation } from '@/lib/function'
import { banFormDto, banSchema } from '@/model/schema'
import React from 'react'
import { FormProvider } from 'react-hook-form'

interface Props {
    id: string
}


export const BanForm: React.FC<Props> = ({ id }: Props) => {
    const { form, submitHandler } = useMyForm<banFormDto>(banSchema,
        () => { },
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
