import React from "react";

export default function Page(props: { params: { "research-sub": string } }) {
    return <>
        {props.params["research-sub"]}
    </>
}