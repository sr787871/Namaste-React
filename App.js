
// const heading = React.createElement("h1",{id:"heading",abc:"xyz"},"Hello World From React!");


// <div id="parent">
//     <div id="child1">
//         <h1>Hello from h1 tag</h1>
//         <h2>Hello from h2 tag</h2>
//     </div>
//     <div id="child2">
//         <h1>Hello from h1 tag</h1>
//         <h2>Hello from h2 tag</h2>
//     </div>
// </div>

// below is the sample of the code.

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"Hello h1"),   // When we want to pass 2 or more childrens then we use array
        React.createElement("h2",{},"Hello h2")
    ]),                                             // We can write react in Js but ,
    React.createElement("div",{id:"child2"},        // It is very complicated for that reason we use JSX 
        [React.createElement("h1",{},"Hello h1"),
        React.createElement("h2",{},"Hello h2")])])

// ReactElement(object) ==> HTML(browser understands)

// React.createElement it creates object behind the scene this object is the converted into html tag which is understood by the browser.

console.log(parent) // returns object in which the attributes are also called props and the content inside the heading is children.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);