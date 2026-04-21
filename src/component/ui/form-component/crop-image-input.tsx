import { blobFile, cn } from "@/lib/function"
import { useCropThrow } from "@/lib/hook/throw"

interface Props {
    className?: string
}


export const CropImgInput: React.FC<Props> = ({ className }: Props) => {
    const [_, setBlob] = useCropThrow()
    const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log(e.target.files[0])
            setBlob(await blobFile(e.target.files[0]))
        }
    }

    return (
        <input type="file" onChange={changeHandler} className={cn("", className)} />
    )
}
