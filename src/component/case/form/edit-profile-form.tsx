import React from 'react'
import { TextInput, Button, ImgInput, Title, LinkPrime } from '@component/ui'
import { FormProvider } from 'react-hook-form'
import { editProfileFormSchema, editProfileSchema } from '@/model/schema'
import { useMyForm, useQ, useToast, useUser } from '@/lib/hook'
import { profileService } from '@/service'
import { useNavigate } from 'react-router-dom'
import { qpk, REJECT_SERVER } from '@/config'
import { conventToFormData } from '@/lib/function'

interface Props {
}

const ACCEESS_ACTION = 'Профиль успешно обновлен!'
export const EditProfileForm: React.FC<Props> = ({ }: Props) => {
    const navigate = useNavigate()
    const toast = useToast()
    const { pushQ } = useQ('forceupadeteuser')

    const { form, submitHandler } =
        useMyForm<editProfileFormSchema>(
            editProfileSchema,
            (data: editProfileFormSchema) => {
                profileService.UPDATE_PROFILE(conventToFormData(data))
                    .then(({ status }) => {
                        if (status == 200 || status == 201) {
                            toast('message', { text: ACCEESS_ACTION })
                            pushQ('true')
                            setTimeout(() => {
                                navigate(`/?${qpk.forceupadeteuser}=true`)
                            }, 600)
                        }
                    })
                    .catch(() => toast('message', { text: REJECT_SERVER }))
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
