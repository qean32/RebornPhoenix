import React from 'react'
import { Title, Button, TextInput } from '@component/ui'
import { resetPasswordFormSchema, resetPasswordSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm, useToast } from '@/lib/hook'
import { authService } from '@/service'
import { REJECT_SERVER } from '@/export'

interface Props {
}


const ACCEESS_ACTION = 'На вашу почту отпраленно сообщение!'
export const ResetPasswordForm: React.FC<Props> = ({ }: Props) => {
    const auth = new authService()
    const toast = useToast()

    const { form, submitHandler } =
        useMyForm<resetPasswordFormSchema>(
            resetPasswordSchema,
            (data: resetPasswordFormSchema) => {
                auth.RESET_PASSWORD(data)
                    .then(({ status }) => {
                        if (status == 200) {
                            toast('message', { text: ACCEESS_ACTION }, 10000)
                        }
                    })
                    .catch(() => toast('message', { text: REJECT_SERVER }))
            },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form className="h-full flex justify-center" onSubmit={submitHandler}>
                <div className="w-fit flex flex-col gap-3">
                    <Title className="pb-4">Востановление пароля</Title>
                    <div className="w-[40vh]">
                        <TextInput
                            placeHolder="почта"
                            name='email'
                            className='mb-5'
                        />
                        <Button
                            variant="acceess"
                            className="w-full py-3"
                            type='submit'
                        >Отправить</Button>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
