const rules = {
  "-": "&#8209;",
  "–": "&ndash;",
  "—": "&mdash;",
  ">": "&lt;",
  "≤": "&le;",
  "<": "&gt;",
  "≥": "&ge;",
  "/": "&#8725;",
  "space": "&nbsp;",
};

function copyToClipboard(textAreaId) {
  const textArea = document.getElementById(textAreaId);
  if (textArea) {
    const paragraph = textArea.querySelector('p');
    if (!paragraph || !paragraph.innerText || paragraph.classList.contains("placeholder")) {
      alert ("No text to copy.");
    } else {
      navigator.clipboard.writeText(paragraph.innerText);
      alert("Copied the text to the clipboard.");
    }
  } else {
    alert("Failed to copy the text to the clipboard.");
  }
}

window.onload = function () {
  document.getElementById("fr-rule-convert").addEventListener("click", function () {
    const outputArea = document.getElementById("fr-rule-output");
    if (outputArea.innerHTML) {
      outputArea.innerHTML = "";
    }
    const input = document.getElementById("fr-rule-input").value;
    const paragraphTag = document.createElement("p");
    const output = input.replaceAll("à ", "à&nbsp;")
      .replaceAll(" = ", "&nbsp;=&nbsp;")
      .replaceAll(" :", "&nbsp;:")
      .replaceAll(" %", "&nbsp;%");
    if (output === "") {
      paragraphTag.innerText = "Empty";
      paragraphTag.classList.add("placeholder");
    } else {
      paragraphTag.innerText = output;
    }
    outputArea.append(paragraphTag);
  });

  document.getElementById("choose-rule-convert").addEventListener("click", function () {
    const outputArea = document.getElementById("choose-rule-output");
    if (outputArea.innerHTML) {
      outputArea.innerHTML = "";
    }
    const selectedOption = document.getElementById("choose-rule-select").value;
    const input = document.getElementById("choose-rule-input").value;
    const paragraphTag = document.createElement("p");
    if (input === "") {
      paragraphTag.innerText = "Empty";
      paragraphTag.classList.add("placeholder");
    } else if (selectedOption in rules) {
      const output = input.replaceAll(selectedOption, rules[selectedOption]);
      paragraphTag.innerText = output;
    } else {
      paragraphTag.innerText = input;
    }
    outputArea.append(paragraphTag);
  });

  document.getElementById("custom-rule-convert").addEventListener("click", function () {
    const outputArea = document.getElementById("custom-rule-output");
    if (outputArea.innerHTML) {
      outputArea.innerHTML = "";
    }
    const from = document.getElementById("custom-rule-from").value;
    const to = document.getElementById("custom-rule-to").value;
    const input = document.getElementById("custom-rule-input").value;

    const paragraphTag = document.createElement("p");
    if (input === "") {
      paragraphTag.innerText = "Empty";
      paragraphTag.classList.add("placeholder");
    } else if (from && from !== "" && to !== null && to !== undefined) {
      const output = input.replaceAll(from, to);
      paragraphTag.innerText = output;
    } else {
      paragraphTag.innerText = input;
    }
    outputArea.append(paragraphTag);
  });
};
