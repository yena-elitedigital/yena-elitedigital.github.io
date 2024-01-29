const onShowList = (url) => {
  window.location.href = url;
};

const onShowModal = (name, url, ingredients, allergens) => {
  const modal = document.getElementById("react-modal");
  const modalText = document.getElementById("modal-text");
  modalText.innerHTML = `
    <span class="coffee-name">${name}</span>
    ${ingredients && `<br /><span>Ingredients:</span> ${ingredients}`}
    ${allergens && `<br /><span>Allergens:</span> ${allergens}`}
  `;

  modal.setAttribute('data-coffee-url', url);
  modal.classList.remove("hidden");
};
