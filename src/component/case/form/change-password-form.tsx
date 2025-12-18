import React from 'react'
import { Title, PasswordInput, Button } from '@component/ui'
import { changePasswordFormDto, changePasswordSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm } from '@/lib/castom-hook'

interface Props {
}


export const ChangePasswordForm: React.FC<Props> = ({ }: Props) => {
    const { form, submitHandler } =
        useMyForm<changePasswordFormDto>(
            changePasswordSchema,
            () => { },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form className="h-full flex justify-center" onSubmit={submitHandler}>
                <div className="w-fit flex flex-col gap-3">
                    <Title className="pb-4">Изменение пароля</Title>
                    <div className="w-[35vh] flex flex-col gap-5">
                        <PasswordInput
                            placeHolder="Введите пароль"
                            name='password'
                            xHint='right'
                        />
                        <PasswordInput
                            placeHolder="Повторите пароль"
                            name='confirmPassword'
                            xHint='right'
                        />
                        <Button
                            variant="acceess"
                            type='submit'
                            className="w-full py-3"
                        >Сохранить</Button>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
