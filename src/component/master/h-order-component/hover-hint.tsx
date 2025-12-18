import React from "react"
import { cn } from "@lib/function"
import { xPositionHint, yPositionHint } from "@/model"

interface Props {
    className?: string
    children: React.ReactNode
    text: string
    x: xPositionHint
    y: yPositionHint
    fit?: boolean
    infinity?: boolean
}

const side = {
    left: "left-8 -translate-x-full",
    right: "right-5 translate-x-full",
    top: "-top-12",
    "center-x": "left-1/2 -translate-x-[50%]",
    "center-y": "-top-1",
    bottom: "-bottom-12"
}


export const HoverHint: React.FC<Props> = ({
    className,
    text,
    x,
    y,
    children,
    infinity = false,
    fit = false
}: Props) => {
    return (
        <div className={cn(
            "w-fit z-10 absolute h-fit hover-hint",
            className,
            (infinity && "infinity-view")
        )}>
            {children}
            <div
                className={cn(
                    "warning-hint p-2 px-4 rounded-sm bg-color-dark absolute outline-bg-light opacity-0 pointer-events-none transition-300 min-w-[240px] cursor-pointer",
                    side[x],
                    side[y],
                    (x == "left" ? "origin-right" : "origin-left"),
                    (fit && 'no-min-w')
                )}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}
