import React from "react";

export default function Page(props: { params: { "student-portal-sub": string } }) {
    return <>
        {props.params["student-portal-sub"]}
    </>
}