import React from 'react'
import { TextInput, Button, ImgInput, Title, LinkPrime } from '@component/ui'
import { FormProvider } from 'react-hook-form'
import { editProfileFormSchema, editProfileSchema } from '@/model/schema'
import { useMyForm, useToast, useUser } from '@/lib/hook'
import { profileService } from '@/service'
import { useNavigate } from 'react-router-dom'
import { conventToFormData, handleFetchCatch, handleFetchThen } from '@/lib/function'
import { urlTitle } from '@/config'

interface Props {
}

const ACCEESS_ACTION = 'Профиль успешно обновлен!'
export const EditProfileForm: React.FC<Props> = () => {
    const navigate = useNavigate()
    const toast = useToast()

    const { form, submitHandler } =
        useMyForm<editProfileFormSchema>(
            editProfileSchema,
            (data: editProfileFormSchema) => {
                profileService.UPDATE_PROFILE(conventToFormData(data))
                    .then(response => handleFetchThen(response, toast, ACCEESS_ACTION, () => {
                        setTimeout(() => {
                            navigate(`/?${urlTitle.forceupdate}=true`)
                        }, 600)
                    }))
                    .catch(response => handleFetchCatch(response, toast))
            },
            () => { }
        )
    const { user } = useUser()

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
                                defaultValue={user?.name ?? ''}
                                className='outline-bg-light'
                            />

                            <ImgInput name='ava'
                                defaultValue={user?.ava ?? ''}
                                title='фото профиля'
                                className='pl-1 pt-5'
                            />
                        </div>
                        <LinkPrime
                            path='/reset-password'
                        >Изменить пароль</LinkPrime>
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
