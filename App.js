const nested1 = React.createElement(
    "div",
    { id: "child2" },
      [React.createElement("h3", {}, "Im an h3 tag"),
      React.createElement("h4", {}, "Im an h4 tag")]
    );

const nested = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Im an h1 tag"),
    React.createElement("h2", {}, "Im an h2 tag")],
    nested1
  )
); 

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "HELLO WORLD FROM REACT"
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(nested);
  console.log(nested);
  
  
