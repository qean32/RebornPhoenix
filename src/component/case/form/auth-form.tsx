import React from 'react'
import { TextInput, Button, PasswordInput, Title, LinkPrime } from '@component/ui'
import { authFormSchema, authSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm, useToast } from '@/lib/hook'
import { useNavigate } from 'react-router-dom'
import { authService } from '@/service'
import { getFirstError, initSetUser, setToken } from '@/lib/function'

interface Props {
}

export const AuthForm: React.FC<Props> = ({ }: Props) => {
    const auth = new authService()
    const toast = useToast()
    const navigate = useNavigate()

    const { form, submitHandler } =
        useMyForm<authFormSchema>(
            authSchema,
            (data: authFormSchema) => {
                auth.AUTH(data)
                    .then(({ data, status }) => {
                        if (status == 200) {
                            // @ts-ignore
                            setToken(data?.token);
                            initSetUser(true)
                            toast('message', { text: 'Успешная авторизация' })
                            setTimeout(() => {
                                navigate('/')
                            }, 500)
                        }
                    })
                    .catch(response => { toast('message', { text: getFirstError(response) }, 5000) })
            },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form className="w-1/2 h-full flex justify-center" onSubmit={submitHandler}>
                <div className="w-fit flex flex-col gap-3">
                    <Title>ВХОД</Title>
                    <div className="flex-1 w-[35vh] pt-2 flex flex-col gap-5">
                        <TextInput
                            className='outline-bg-light'
                            placeHolder="никнейм или почта"
                            name='nameOrEmail'
                        />
                        <PasswordInput
                            placeHolder="пароль"
                            name='password'
                            xHint='right'
                            className='outline-bg-light'
                        />
                        <LinkPrime
                            path='/reset-password'
                        >Востановить пароль</LinkPrime>
                    </div>
                    <Button
                        className="px-5 py-3"
                        variant='acceess'
                        type='submit'
                    >
                        <p>Вход</p>
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}
