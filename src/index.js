/** @jsxRuntime classic */
/** @jsx Didact.createElement */
import {Didact} from "./didact-main";

// const element = Didact.createElement(
//     "div",
//     {id: "wrapper"},
//     Didact.createElement("h1", null, "Header"),
//     Didact.createElement("br")
// );
//



const element = (
    <div style="background: salmon">
        <h1>Hello World</h1>
        <h2 style="text-align:right">from Didact</h2>
    </div>
);
const container = document.getElementById("root");
Didact.render(element, container);

console.log('element: ', element);