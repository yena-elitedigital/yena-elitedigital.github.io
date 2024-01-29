const rootElement = document.getElementById('component2');

function Component2() {
  return (
    <div style={{ width: "100%", height: "5px", backgroundColor: "#AAA" }} />
  );
}

ReactDOM.hydrate(React.createElement(Component2), rootElement);
