import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement => ReactElement - JS Object => HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// JSX transpiled(the code is converted into the code which browser can understand) before it reaches the JS Engine - PARCEL -> Babel

// JSX(transpiled) => React.createElement => ReactElement - JS Object => HTMLElement(render)
// Behind the scenes JSX is using React.createElement

//React Element
const jsxHeading = <h1 id="heading" tabIndex="5">Namaste React with JSX</h1>

//React Component
const HeadingComponent = ()=>{
    return <h1>Namaste React In Heading</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>) // This is how to render React Component
root.render(jsxHeading); // This is how to render React ELement
