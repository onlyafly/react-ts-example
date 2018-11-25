import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./Hello";
import Fun from "./Fun";

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript" framework="React" />
        <Fun />
    </div>
    ,
    document.getElementById("tsexample")
);