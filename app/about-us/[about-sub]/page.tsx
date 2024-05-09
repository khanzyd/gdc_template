import React from "react";

export default function Page(props: { params: { "about-sub": string } }) {
    return <>
        {props.params["about-sub"]}
    </>
}