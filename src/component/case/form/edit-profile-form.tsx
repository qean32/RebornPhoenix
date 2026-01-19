import React from 'react'
import { TextInput, Button, ImgInput, Title, LinkPrime } from '@component/ui'
import { FormProvider } from 'react-hook-form'
import { editProfileFormDto, editProfileSchema } from '@/model/schema'
import { useMyForm, useToast, useUser } from '@/lib/castom-hook'
import { profileService } from '@/service'
import { setUser } from '@/lib/function'

interface Props {
}

const ACCEESS_ACTION = 'Профиль успешно обновлен!'

export const EditProfileForm: React.FC<Props> = ({ }: Props) => {
    const toast = useToast()
    const returnformData = (file: any, name: string) => {
        const form = new FormData()
        if (file) {
            form.append('ava', file[0])
        }
        form.append('name', name)

        return form
    }

    const { form, submitHandler } =
        useMyForm<editProfileFormDto>(
            editProfileSchema,
            (data: editProfileFormDto) => {
                profileService.updateProfile(returnformData(data.ava, data.name))
                    .then(({ status, data }) => {
                        if (status == 200) {
                            toast('message', { text: ACCEESS_ACTION })
                            setUser(data)
                        }
                    })
                    .catch(() => toast('message', { text: 'Ошибка!' }))
            },
            () => { }
        )
    const { name, ava } = useUser()

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
                                defaultValue={name}
                                className='outline-bg-light'
                            />

                            <ImgInput name='ava'
                                defaultValue={ava}
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
