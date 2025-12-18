import React from 'react'
import { TextInput, Button, PasswordInput, Title, LinkPrime } from '@component/ui'
import { authFormDto, authSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm } from '@/lib/castom-hook'

interface Props {
}

export const AuthForm: React.FC<Props> = ({ }: Props) => {
    const { form, submitHandler } =
        useMyForm<authFormDto>(
            authSchema,
            () => { },
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
                        children={<p>Вход</p>}
                    />
                </div>
            </form>
        </FormProvider>
    )
}
