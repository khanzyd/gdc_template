import React from "react";

export default function Page(props: { params: { "about-sub": string } }) {
    return <div>

        {props.params["about-sub"]}
    </div>
}