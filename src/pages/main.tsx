import {
    BlockOne,
    BlockThree,
    BlockTwo,
    Carousel,
    LargeLogo,
    MainBanner,
    Map
} from "@/component/ui/main";
import { qpk, title } from "@/config";
import { usePage, useQ } from "@lib/hook";
import React from "react";


export const Main = () => {
    const { param, clearQ } = useQ(qpk.forceupadeteuser)
    usePage(title.main, !!param)
    React.useEffect(() => {
        clearQ()
    }, [])

    return (
        <main>
            <Carousel />
            <MainBanner />
            <BlockOne />
            <BlockTwo />
            <BlockThree />
            <LargeLogo />
            <Map />
            <Carousel />
        </main >
    );
}