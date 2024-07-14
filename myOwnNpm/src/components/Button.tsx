import * as React from "react";

type PropsType = {
    children: React.ReactNode
}

const Button = ({ children }: PropsType) => {
    return (
        <div>
            <button
            style={{
                padding:"10px 20px",
                fontSize:"1.2em",
                borderRadius:"5px",
                cursor:"pointer",
                backgroundColor:"blue",
                color:"white",
                border:"none",

            }}>{children}</button>
        </div>
    )
}

export default Button;
