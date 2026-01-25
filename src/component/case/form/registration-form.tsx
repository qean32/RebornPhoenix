import React from 'react'
import { TextInput, Button, PasswordInput, Checkbox, Title } from '@component/ui'
import { registrationFormDto, registrationSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm, useToast } from '@/lib/castom-hook';
import { authService } from '@/service';
import { getFirstError, setToken } from '@/lib/function';
import { useNavigate } from 'react-router-dom';

interface Props {
}

export const RegistrationForm: React.FC<Props> = ({ }: Props) => {
    const auth = new authService()
    const toast = useToast()
    const navigate = useNavigate()

    const { form, submitHandler } =
        useMyForm<registrationFormDto>(
            registrationSchema,
            (data: registrationFormDto) => {
                auth.REGISTRATION(data)
                    // @ts-ignore
                    .then(({ data, status }) => {
                        if (status == 200) {
                            // @ts-ignore
                            setToken(data.token);
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

            <form className="w-1/2 h-full flex justify-center rounded-md" onSubmit={submitHandler}>
                <div className="w-fit flex flex-col gap-3">
                    <Title>РЕГИСТРАЦИЯ</Title>
                    <div className="flex-1 w-[35vh] pt-2 flex flex-col gap-5">
                        <TextInput
                            className='outline-bg-light'
                            placeHolder="никнейм"
                            name='name'
                        />
                        <TextInput
                            className='outline-bg-light'
                            placeHolder="почта"
                            name='email'
                        />
                        <PasswordInput
                            className='outline-bg-light'
                            xHint='right'
                            placeHolder="пароль"
                            name='password'
                        />
                        <PasswordInput
                            className='outline-bg-light'
                            xHint='right'
                            placeHolder="повторите пароль"
                            name='confirmPassword'
                        />
                        <Checkbox fn={() => { }} title='мне больше 18 лет и я согласен с условиями конфиденциальности' value />
                    </div>
                    <Button
                        variant='acceess'
                        type='submit'
                        className="px-5 py-3"
                    >
                        <p>Регистрация</p>
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}
