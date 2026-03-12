import { contentLoaderProps } from "@/config";
import React from "react";
import ContentLoader from "react-content-loader";

export const PostContentSceleton: React.FC<{}> = ({ }: {}) => {
    return <ContentLoader
        width='100%'
        height='580px'
        {...contentLoaderProps}
    >

        <rect x="0" y='15' width="25%" height="60" />
        <rect x="0" y='90' width="30%" height="55" />
        <rect x="0" y='160' width="90%" height="125" />
        <rect x="0" y='300' width="100%" height="255" />
    </ContentLoader>
}