import {
    BlockOne,
    BlockThree,
    BlockTwo,
    Carousel,
    LargeLogo,
    MainBanner,
    Map
} from "@/component/ui/main";
import { qpk, title } from "@/export";
import { changeTitle, initSetUser } from "@/lib/function";
import { useQ } from "@lib/hook";
import React from "react";


export const Main = () => {
    changeTitle(title.main)
    const { param, clearQ } = useQ(qpk.forceupadeteuser)
    initSetUser(!!param)
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