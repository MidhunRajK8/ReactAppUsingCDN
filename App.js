


const parent = React.createElement("div", {id: "parent"}, 
        [
            React.createElement("div", {id: "child1"}, 
            [
                React.createElement("h1", {}, "Hi I'm H1 from child1"),
                React.createElement("h2", {}, "Hi I'm H from child1"),
            ]
            ),
            React.createElement("div", {id: "child2"}, 
            [
                React.createElement("h1", {}, "Hi I'm H1 from child2"),
                React.createElement("h2", {}, "Hi I'm H from child2"),
            ]
            )
        ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);