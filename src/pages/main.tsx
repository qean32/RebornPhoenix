import {
    BlockOne,
    BlockThree,
    BlockTwo,
    Carousel,
    LargeLogo,
    MainBanner,
    Map
} from "@/component/ui/main";
import { qParamName, title } from "@/export";
import { initSetUser } from "@/lib/function";
import { usePage, useQueryParam } from "@lib/castom-hook";
import React from "react";


export const Main = () => {
    const { } = usePage(title.main)
    const { param, clearQ } = useQueryParam(qParamName.forceupadeteuser)
    initSetUser(!!param)
    React.useEffect(() => {
        clearQ()
    }, [])
    // fetch('http://localhost:8000/storage/5HNRFYAUcbOJlMqgRWWgv9NY9CD4P7u0.json', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'

    //     }
    // })
    //     .then(data => data.json())
    //     .then(data => console.log(data))

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