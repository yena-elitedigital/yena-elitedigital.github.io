const rootElement = document.getElementById('react-modal');

function Modal() {
  const closeModal = () => {
    rootElement.classList.add("hidden");
  };

  const onUrl = () => {
    const coffeeUrl = rootElement.getAttribute("data-coffee-url");
    window.location.href = coffeeUrl;
  };

  return (
    <div id="modal-container" className="modal">
      <div className="close-btn" onClick={closeModal}>X</div>
      <p id="modal-text"></p>
      <button onClick={onUrl}>View</button>
    </div>
  );
}

ReactDOM.hydrate(React.createElement(Modal), rootElement);
