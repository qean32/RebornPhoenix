import React, { useCallback } from 'react'
import { TextInput, Button, PasswordInput, Checkbox, Title } from '@component/ui'
import { registrationFormSchema, registrationSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm, useToast } from '@/lib/hook';
import { authServiceItem } from '@/service';
import { handleFetchCatch, handleFetchThen, setToken } from '@/lib/function';
import { useNavigate } from 'react-router-dom';
import { urlTitle } from '@/config';

interface Props {
}

export const RegistrationForm: React.FC<Props> = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const ref = React.useRef<null | HTMLButtonElement>(null)
    const checkHandler = useCallback(() => {
        if (ref.current) {
            ref.current.disabled = !ref.current.disabled
        }
    }, [])

    const { form, submitHandler } =
        useMyForm<registrationFormSchema>(
            registrationSchema,
            (data: registrationFormSchema) => {
                authServiceItem.REGISTRATION(data)
                    .then(response => handleFetchThen(response, toast, "Успешная регистрация!", (data) => {
                        setToken(data.token);
                        setTimeout(() => {
                            navigate(`/?${urlTitle.forceupdate}=true`)
                        }, 500)
                    }))
                    .catch(response => handleFetchCatch(response, toast))
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
                        <Checkbox title='Мне больше 18 лет и я согласен с условиями конфиденциальности' fn={checkHandler} />
                    </div>
                    <Button
                        ref={ref}
                        disabled={true}
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
