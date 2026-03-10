import React from 'react'
import { Title, PasswordInput, Button } from '@component/ui'
import { changePasswordFormSchema, changePasswordSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm, useToast } from '@/lib/hook'
import { authServiceItem } from '@/service'
import { handleFetchCatch, handleFetchThen } from '@/lib/function'
import { useSearchParams } from 'react-router-dom'
import { urlTitle } from '@/config'

interface Props {
}

const ACCEESS_ACTION = 'Вы сменили пароль!'
export const ChangePasswordForm: React.FC<Props> = () => {
    const toast = useToast()
    const [url] = useSearchParams()

    const { form, submitHandler } =
        useMyForm<changePasswordFormSchema>(
            changePasswordSchema,
            (data: changePasswordFormSchema) => {
                authServiceItem.CHANGE_PASSWORD(data, url.get(urlTitle.token) ?? "")
                    .then(response => handleFetchThen(response, toast, ACCEESS_ACTION, () => {
                        setTimeout(() => {
                            toast('message', { text: 'Вы можете закрывать страницу!' })
                        }, 10000)
                    }))
                    .catch(response => handleFetchCatch(response, toast))
            },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form className="h-full flex justify-center" onSubmit={submitHandler}>
                <div className="w-fit flex flex-col gap-3">
                    <Title className="pb-4">Изменение пароля</Title>
                    <div className="w-[40vh] flex flex-col gap-5">

                        <PasswordInput
                            placeHolder="пароль"
                            name='password'
                            xHint='right'
                        />

                        <PasswordInput
                            placeHolder="повторите пароль"
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
