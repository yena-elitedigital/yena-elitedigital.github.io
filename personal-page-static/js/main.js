const BASEURL = "/";

(function () {
	"use strict";

  function formatCoffeeData(dataList, coffee, temp) {
    if (!dataList || dataList.length === 0) return;

    for (let data of dataList) {
      let elem = document.createElement("tr");
      elem.className = "coffee-row";
      elem.innerHTML = `
        <td scope="row" class="th-lg">${coffee.name}</td>
        <td class="column-2">${temp}</td>
        <td class="th-lg column-3">${data.size}</td>
        <td class="th-lg column-4">${coffee.allergens.join(", ")}</td>
        <td class="column-5">${data.shots}</td>
        <td><button id="${coffee.name}-detail-btn" class="detail-btn">View</button></td>
      `;
      document.getElementById("coffee-list").append(elem);
    }
  }

	function updateCoffeeList() {
    for (let coffee of coffeeData) {
      if (coffee?.ice) formatCoffeeData(coffee.ice, coffee, "Ice");
      else formatCoffeeData(coffee.hot, coffee, "Hot");

      const elementsArray = document.querySelectorAll(".detail-btn");
      elementsArray.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          e.preventDefault();
          if (e.target.id) {
            const coffeeName = e.target.id.split('-detail-btn')[0];
            if (coffeeName) {
              window.location.href = `${BASEURL}/coffee.html?coffee=${coffeeName}`;
            }
          }
        });
      });
    }
  }

  function updateCoffeeGeneralInfo(heading, info) {
    if (!info || info.length === 0) return;

    let elem = document.createElement("div");
    elem.className = "general-container";
    elem.innerHTML = `<h3>${heading}</h3>`;
    const generalHeading = `
      <div class="general-heading">
        <p>Size</p>
        <p>Amount (ml)</p>
        <p>Espresso Shot</p>
        <p>Calories (Cal.)</p>
        <p>Caffeine (mg)</p>
      </div>
    `
    let generalBody = "";
    for (let coffee of info) {
      generalBody += `
        <div class="general-body">
          <p class="body-heading">${coffee.size}</p>
          <p>${coffee.amount < 0 ? "N/A" : coffee.amount}</p>
          <p>${coffee.shots < 0 ? "N/A" : coffee.shots}</p>
          <p>${coffee.calories < 0 ? "N/A" : coffee.calories}</p>
          <p>${coffee.caffeine < 0 ? "N/A" : coffee.caffeine}</p>
        </div>
      `
    }
    elem.innerHTML += `<div class="general-table">${generalHeading}${generalBody}</div>`
    document.querySelector(".info-general").append(elem);
  }

  function updateCoffeeDetailInfo(heading, info) {
    let elem = document.createElement("div");
    elem.className = "detail-container";
    elem.innerHTML = `
      <h3>${heading}</h3>
      <p>${info ? info.split('\n').join("<br>") : ""}</p>
    `;
    document.querySelector(".info-detail").append(elem);
  }

  function updateCoffeeInfo(param) {
    let coffee = param;
    let filterCoffeeData = coffeeData.filter(c => c.name === coffee);
    if (filterCoffeeData && filterCoffeeData.length === 1) {
      coffee = filterCoffeeData[0];
    }

    if (!coffee?.name) return;

    document.querySelector(".coffee-name").innerHTML = coffee.name;

    if (coffee.ice) updateCoffeeGeneralInfo("Ice", coffee.ice);
    if (coffee.hot) updateCoffeeGeneralInfo("Hot", coffee.hot);

    updateCoffeeDetailInfo("Description", coffee.description);
    updateCoffeeDetailInfo("Recipe", coffee.recipe);
    updateCoffeeDetailInfo("Allergens", coffee.allergens ? coffee.allergens.toString() : "");
    updateCoffeeDetailInfo("Options", coffee.options ? coffee.options.join(", ") : "");
  }

  window.onload = function () {
    const currPath = window.location.href.split(BASEURL).slice(-1)[0];
    if (currPath === "/index.html") {
      updateCoffeeList();
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      updateCoffeeInfo(urlParams.get('coffee'));
    }
	};
})();
