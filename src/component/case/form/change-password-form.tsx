import React from 'react'
import { Title, PasswordInput, Button } from '@component/ui'
import { changePasswordFormSchema, changePasswordSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm, useQ, useToast } from '@/lib/hook'
import { authService } from '@/service'
import { qpk, REJECT_SERVER } from '@/export'

interface Props {
}

const ACCEESS_ACTION = 'Вы сменили пароль!'
export const ChangePasswordForm: React.FC<Props> = ({ }: Props) => {
    const auth = new authService()
    const toast = useToast()
    const { param: token } = useQ(qpk.token)

    const { form, submitHandler } =
        useMyForm<changePasswordFormSchema>(
            changePasswordSchema,
            (data: changePasswordFormSchema) => {
                auth.CHANGE_PASSWORD(data, token)
                    .then(({ status }) => {
                        if (status == 200) {
                            toast('message', { text: ACCEESS_ACTION })
                            setTimeout(() => {
                                toast('message', { text: 'Вы можете закрывать страницу!' })
                            }, 10000)
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
