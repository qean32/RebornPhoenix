import React from 'react'
import { Title, Button, TextInput } from '@component/ui'
import { resetPasswordFormDto, resetPasswordSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm } from '@/lib/castom-hook'

interface Props {
}


export const ResetPasswordForm: React.FC<Props> = ({ }: Props) => {
    const { form, submitHandler } =
        useMyForm<resetPasswordFormDto>(
            resetPasswordSchema,
            () => { },
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
