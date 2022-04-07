import React from 'react';
import ReactDOM from 'react-dom';
import { Face } from './Face';
// console.log(BackgroundCircle);

const width = 960;
const height = 500;

const App = () => (
    <Face
        width={width}
        height={height}
        centerX={width / 2}
        centerY={height / 2}
        strokeWidth={10}
        eyeOffsetX={90}
        eyeOffsetY={90}
        eyeRadius={50}
        mouthRadius={200}
        mouthWidth={20}
    />

);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
