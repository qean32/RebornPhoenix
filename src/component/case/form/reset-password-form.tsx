import React from 'react'
import { Title, Button, TextInput } from '@component/ui'
import { resetPasswordFormSchema, resetPasswordSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm, useToast } from '@/lib/hook'
import { authServiceItem } from '@/service'
import { handleFetchCatch, handleFetchThen } from '@/lib/function'

interface Props {
}


const ACCEESS_ACTION = 'На вашу почту отпраленно сообщение!'
export const ResetPasswordForm: React.FC<Props> = ({ }: Props) => {
    const toast = useToast()

    const { form, submitHandler } =
        useMyForm<resetPasswordFormSchema>(
            resetPasswordSchema,
            (data: resetPasswordFormSchema) => {
                authServiceItem.RESET_PASSWORD(data)
                    .then(response => handleFetchThen(response, toast, ACCEESS_ACTION))
                    .catch(response => handleFetchCatch(response, toast))
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
