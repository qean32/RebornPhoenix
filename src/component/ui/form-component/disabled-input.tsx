import { cn } from "@/lib/function"

interface Props {
    className?: string,
    value: string
}


export const DisabledInput: React.FC<Props> = ({ className = 'w-full', value }: Props) => {
    return (
        <div className={cn('', className)}>
            <input type="text" value={value} disabled />
        </div>
    )
}