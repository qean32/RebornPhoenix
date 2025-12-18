import React from 'react'
import { TextInput, Button, ImgInput, Title, LinkPrime } from '@component/ui'
import { FormProvider } from 'react-hook-form'
import { editProfileFormDto, editProfileSchema } from '@/model/schema'
import { useMyForm } from '@/lib/castom-hook'

interface Props {
}


export const EditProfileForm: React.FC<Props> = ({ }: Props) => {
    const { form, submitHandler } =
        useMyForm<editProfileFormDto>(
            editProfileSchema,
            () => { },
            () => { }
        )

    return (
        <FormProvider {...form}>

            <form className="w-1/2 h-full flex justify-center" onSubmit={submitHandler}>
                <div className="w-fit flex flex-col gap-3">
                    <Title>РЕДАКТОР</Title>
                    <div className="flex-1 w-[35vh] pt-2 flex flex-col justify-between pb-3">
                        <div className="flex gap-2 flex-col">
                            <TextInput
                                placeHolder="никнейм"
                                name='name'
                                className='outline-bg-light'
                            />
                            <ImgInput title='фото профиля' className='pl-1 pt-5' />
                        </div>
                        <LinkPrime
                            path='/change-password'
                        >Востановить пароль</LinkPrime>
                    </div>
                    <Button
                        variant='acceess'
                        className="px-5 py-3"
                        type='submit'
                    >
                        <p>Редактировать</p>
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}
