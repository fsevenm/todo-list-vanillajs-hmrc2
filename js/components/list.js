import Component from "../lib/component.js";
import store from "../store/index.js";

export default class List extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector(".js-items")
    });
  }

  render() {
    let self = this;

    if (store.state.items.length === 0) {
      self.element.innerHTML = `<p>No notes yet 😢</p>`;
      return;
    }

    self.element.innerHTML = `
            <ul type="none">
                ${store.state.items
                  .map(item => {
                    return `
                        <li>
                          <input type="checkbox" ${item.isDone ? "checked" : ""} />
                          <span class="${item.isDone ? "is-done" : ""}">${item.todo}</span>
                          <button title="Delete item">×</button>
                        </li>
                    `;
                  })
                  .join("")}
            </ul>
        `;
    self.element.querySelectorAll("input[type=checkbox]").forEach((input, index) => {
      input.addEventListener("change", () => {
        store.dispatch("toggleDone", { index });
      });
    });
    self.element.querySelectorAll("button").forEach((button, index) => {
      button.addEventListener("click", () => {
        store.dispatch("clearItem", { index });
      });
    });
  }
}
