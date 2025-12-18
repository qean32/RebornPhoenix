import { cn } from "@/lib/function"

interface Props {
    title: number
    className?: string
}

export const Initiative: React.FC<Props> = ({ title, className }: Props) => {
    return (
        <p className={cn(
            'bg-yellow-800 px-1 mt-1 text-end',
            className
        )}>{title}</p>
    )
}