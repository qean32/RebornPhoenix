import React from 'react'
import { TextInput, Button, PasswordInput, Checkbox, Title } from '@component/ui'
import { registrationFormDto, registrationSchema } from '@/model/schema'
import { FormProvider } from 'react-hook-form'
import { useMyForm } from '@/lib/castom-hook';

interface Props {
}

export const RegistrationForm: React.FC<Props> = ({ }: Props) => {
    const { form, submitHandler } =
        useMyForm<registrationFormDto>(
            registrationSchema,
            () => { },
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
                        children={<p>Регистрация</p>}
                    />
                </div>
            </form>
        </FormProvider>
    )
}
