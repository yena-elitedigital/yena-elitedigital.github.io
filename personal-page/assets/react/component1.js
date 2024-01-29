const rootElement = document.getElementById('component1');

function Component1() {
  return (
    <div>
      <div style={{ width: "100%", height: "5px", backgroundColor: "#D7B49E" }} />
      <div id="component2"></div>
    </div>
  );
}

ReactDOM.hydrate(React.createElement(Component1), rootElement);
