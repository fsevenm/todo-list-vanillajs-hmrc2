export default {
  addItem(context, payload) {
    context.commit("addItem", payload);
  },
  clearItem(context, payload) {
    context.commit("clearItem", payload);
  },
  toggleDone(context, payload) {
    context.commit("toggleDone", payload);
  }
};
