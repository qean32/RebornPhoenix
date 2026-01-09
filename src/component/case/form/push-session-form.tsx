import React from 'react'
import { Title, TextInput, SelectSessionBG } from '@component/ui'
import { pushSessionFormDto, pushSessionSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm, useToast } from '@/lib/castom-hook'
import { sessionService } from '@/service/session-service'

interface Props {
    children: React.ReactNode
}

const ACCEESS_ACTION = 'Сессия создан'

export const PushSessionForm: React.FC<Props> = ({ children }: Props) => {
    const toast = useToast()
    const { form, submitHandler } =
        useMyForm<pushSessionFormDto>(
            pushSessionSchema,
            (data: pushSessionFormDto) => {
                sessionService.createSession(data)
                    .then(({ code }) => {
                        if (code == 200) {
                            toast('message', { text: ACCEESS_ACTION })
                        }
                    })
                    .catch(error => toast('message', { text: error }))
            },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form action="" onSubmit={submitHandler}>
                <Title className='mb-5'>ДОБАВЛЕНИЕ СЕССИИ</Title>
                <TextInput placeHolder='Название сессии' className='w-[360px] mb-5' name='name' />
                <SelectSessionBG />
                <div className="pt-8 flex gap-4 justify-end">
                    {children}
                </div>
            </form>
        </FormProvider>
    )
}
