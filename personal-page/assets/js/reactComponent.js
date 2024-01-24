const ReactComponent = () => {
  const rootElement = document.getElementById('react-component');
  const code = `
    ReactDOM.render(
      <div style={{ width: "100%", height: "5px", backgroundColor: "#D7B49E" }} />,
      rootElement
    );
  `;

  const transpiledCode = Babel.transform(code, { presets: ['react'] }).code;
  eval(transpiledCode);
};

ReactComponent();
