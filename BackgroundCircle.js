import React from "react";

export const BackgroundCircle = ({ radius, strokeWidth }) => (
    <circle
        r={radius}
        fill="yellow"
        stroke="black"
        stroke-width={strokeWidth}
    />
);
