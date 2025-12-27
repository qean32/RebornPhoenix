import { xPositionHint, yPositionHint } from "@/model"
import { HoverHint } from "."

type Props = {
    children: React.ReactNode
    title: string
    x?: xPositionHint
    y?: yPositionHint
}

export const FillHoverHint: React.FC<Props> = ({
    children,
    title,
    x = 'center-x',
    y = 'bottom',
}: Props) => {
    return (
        <div className="relative">
            <HoverHint
                text={title}
                fit
                x={x}
                y={y}
                className='no-absolute w-full'
            >
                {children}
            </HoverHint>
        </div>
    )
}