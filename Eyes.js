import React from "react";

export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) => (
    <>
        <circle
            cx={- eyeOffsetX}
            cy={- eyeOffsetY}
            r={eyeRadius}
        />
        <circle
            cx={+ eyeOffsetX}
            cy={- eyeOffsetY}
            r={eyeRadius}
        />
    </>

);
