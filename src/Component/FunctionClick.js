import React, { useState } from "react";

function FunctionClick() {

    const [text, setText] = useState();

    function clickMe(txt) {
        setText(txt);
        console.log(txt);
    }
    return (
        <>
            {(text !== "") && <h1>{text}</h1>}
            <button onClick={()  => clickMe("Clicked on Function")} >Function Click</button>
        </>
    )
};

export default FunctionClick;