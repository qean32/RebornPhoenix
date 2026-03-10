import React from 'react'
import { TextInput, Button, PasswordInput, Title, LinkPrime } from '@component/ui'
import { authFormSchema, authSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm, useToast } from '@/lib/hook'
import { useNavigate } from 'react-router-dom'
import { authServiceItem } from '@/service'
import { handleFetchCatch, handleFetchThen, initSetUser, setToken } from '@/lib/function'

interface Props {
}

const ACCEESS_ACTION = "Успешная авторизация"
export const AuthForm: React.FC<Props> = () => {
    const toast = useToast()
    const navigate = useNavigate()

    const { form, submitHandler } =
        useMyForm<authFormSchema>(
            authSchema,
            (data: authFormSchema) => {
                authServiceItem.AUTH(data)
                    .then(response => handleFetchThen(response, toast, ACCEESS_ACTION, (data) => {
                        setToken(data.token);
                        initSetUser(true)
                        setTimeout(() => {
                            navigate('/')
                        }, 500)
                    }))
                    .catch(response => handleFetchCatch(response, toast))
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
                        variant='acceess'
                        className="px-5 py-3"
                        type='submit'
                    >
                        <p>Вход</p>
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}
