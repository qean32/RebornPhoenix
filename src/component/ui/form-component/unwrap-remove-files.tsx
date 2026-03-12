import { getHTMLData } from "@/lib/function"
import { useFormContext } from "react-hook-form"
import { UnwrapFiles } from "../unwrap-files"
import React from "react"

export const UnwrapRemoveFiles: React.FC<{}> = ({ }: {}) => {
    const { watch, setValue } = useFormContext()
    const tempArray = watch('files') ? watch('files')?.map((item: any) => {
        return { path: item.name }
    }) : []
    const removeHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const path = getHTMLData(e, true).path
        if (path) {
            setValue('files', [...watch('files')].filter(item => item.name != path))
        }
    }

    return (
        <div className="cursor-pointer" onClick={removeHandler}>

            <UnwrapFiles className='pt-5 gap-3 pointer-events-none' files={tempArray ?? []} imgView={false} />
        </div>
    )
}