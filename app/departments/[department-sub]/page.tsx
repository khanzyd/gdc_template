import React from "react";

export default function Page(props: { params: { "department-sub": string } }) {
    return <>
        {props.params["department-sub"]}
    </>
}