export default {
  addItem(state, payload) {
    let _payload = {
      todo: payload,
      isDone: false // by default, isDone has to be false
    };
    state.items.push(_payload);
    return state;
  },
  clearItem(state, payload) {
    state.items.splice(payload.index, 1);
    return state;
  },
  toggleDone(state, payload) {
    state.items[payload.index].isDone = !state.items[payload.index].isDone; 
    return state;
  }
};
