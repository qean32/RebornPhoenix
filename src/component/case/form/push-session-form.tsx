import React from 'react'
import { Title, TextInput, SelectSessionBG } from '@component/ui'
import { pushSessionFormSchema, pushSessionSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm, useTmpObject, useToast } from '@/lib/hook'
import { sessionService } from '@/service/session-service'
import { REJECT_SERVER } from '@/export'

interface Props {
    children: React.ReactNode
    swap: Function
}

const ACCEESS_ACTION = 'Сессия создана'
export const PushSessionForm: React.FC<Props> = ({ children, swap }: Props) => {
    const toast = useToast()
    const { setTmp } = useTmpObject()

    const { form, submitHandler } =
        useMyForm<pushSessionFormSchema>(
            pushSessionSchema,
            (data: pushSessionFormSchema) => {
                sessionService.CREATE_SESSION(data)
                    .then(({ status, data }) => {
                        if (status == 201) {
                            toast('message', { text: ACCEESS_ACTION })
                            setTmp({ payload: data, key: 'create-session' })
                            swap()
                        }
                    })
                    .catch(() => toast('message', { text: REJECT_SERVER }))
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
