import store from "./store/index.js";

import List from "./components/list.js";

const formElement = document.querySelector(".js-form");
const inputElement = document.querySelector("#inp-new-note");

formElement.addEventListener("submit", evt => {
  evt.preventDefault();

  let value = inputElement.value.trim();

  if (value.length) {
    store.dispatch("addItem", value);
    inputElement.value = "";
    inputElement.focus();
  }
});

const listInstance = new List();

listInstance.render();
